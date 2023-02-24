<script setup>
import playerProfile from '@/views/games/PlayerProfile.vue'
import spr from '@/views/games/ScissorsPaperRock.vue'
import cookingBurger from '@/views/games/CookingBurger.vue'
import pfpPicker from '@/views/user-interface/PfPicker.vue'
import {uniqueNamesGenerator, adjectives, animals} from 'unique-names-generator';
import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'
</script>
<script>
export default {
  name: "PlayComponent",
  components: {
    pfpPicker
  },
  setup() {
    const title = ref("");
    const changeRound = (round) => {
      console.log("fire")
      this.currentRound = round;
    };
    return {round, changeRound};
  },
  data() {
    return {
      match: false,
      pfp1: '',
      dName: '',
      display1Name: '',
      display2Name: '',
      player1Address: 'test1',
      player2Address: 'test2',
      admin: false,
      currentRound: 1,
      showNameDialog: false,
      isMobile: true,
    }
  },
  mounted() {
    this.checkIsMobile()
    this.player1Address = localStorage.getItem('flowAddress') || ''
    this.display1Name = localStorage.getItem('flowName') || ''
    this.pfp1 = localStorage.getItem('flowPfp') || ''
    if (this.player1Address) {
      this.getMatch()
    } else {
      this.$router.push('/login')
    }
    if (!this.display1Name || !this.pfp1) {
      this.showNameDialog = true
    }
    this.currentRound = localStorage.getItem('fgtCurrentRound') || 1
    if (this.currentRound == undefined) {
      localStorage.setItem('fgtCurrentRound', 1)
      this.currentRound = 1
    }

    var eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod === "attachEvent"
      ? "onmessage"
      : "message";

    const $this = this
    eventer(messageEvent, function (e) {
      console.log(e)
      if (e.data.name === "gameEvent" || e.message === "gameEvent") {
        console.log('Game Finished');
        if (e.data.nextRound) {
          $this.setNextRound(e.data.nextRound)
        }
      }
    })
  },
  methods: {
    checkIsMobile() {
      if (window.innerWidth > 600) {
        this.isMobile = false
      } else {
        this.isMobile = true
      }
    },
    setNextRound(round) {
      localStorage.setItem('fgtCurrentRound', round)
      this.currentRound = round
      console.log(this.currentRound);
      this.$forceUpdate()
    },
    getMatch() {
      //todo: get match from server
      setTimeout(() => {
        this.match = true
      }, 3000)
      console.log('getMatch')
      if (!this.display1Name && !this.dName) {
        this.dName = uniqueNamesGenerator({
          dictionaries: [adjectives, animals]
        }).replace('_', ' ')
      }
      if (!this.display2Name) {
        this.display2Name = uniqueNamesGenerator({
          dictionaries: [adjectives, animals]
        }).replace('_', ' ')
      }
    },
  },
}
</script>

<template>

  <div>
    <v-layout class="py-4 my-4 mt-0 pt-0" style="height: 40px;">
      <v-system-bar color="primary" style="height: 40px; border-radius: 4px">
        <div>
          Status:
          <v-chip size="x-small">Game in Progress</v-chip>
          <v-chip size="x-small">Round 1/10</v-chip>
          <v-icon icon="mdi-signal-cellular-outline" class="ms-2"></v-icon>
        </div>

      </v-system-bar>
    </v-layout>
  </div>
  <VRow class="match-height">
    <VCol cols="0" md="1" lg="1" xs="0"></VCol>
    <VCol
      cols="6"
      md="2"
      xs="6"
    >
      <playerProfile @click="showNameDialog=!showNameDialog" class="player1main" :you="true" :displayName="display1Name"
                     :displayAddress="player1Address"/>
    </VCol>
    <VCol cols="12" xs="12" md="6" lg="6" id="gameDiv" class="order-last">
      <VCard class="bg-white pa-4 ma-0">
        <div v-if="!match">
          <div class="text-center mx-auto match-height" v-if="!match">
            <h2>
              <VIcon
                start
                icon="mdi-account-search"
              />
              Match Making...
            </h2>
            <VProgress-circular
              class="mt-4"
              indeterminate
              color="primary"
            ></VProgress-circular>
          </div>
          <h3 class="text-center ma-2 mb-6">Finding a worthy adversary...</h3>
          <p class="text-center text-sm text-muted ma-1">If no opponent is found you will be matched with computer
            player.</p>
          <p class="text-center text-sm text-muted ma-1">Computer players use PFP NFTs from the pool of real
            players.<br>(In
            the future
            this will be limited to those being 'lent' out to FGT).</p>
        </div>
        <div v-else>
          {{ currentRound }}
          <div v-if="!currentRound || currentRound==1 || currentRound===undefined">
            <div class="text-center">
              <v-chip size="large" color="primary">Round {{ currentRound }}</v-chip>
            </div>
            <spr :display2Name="display2Name" :admin="admin" @newRound="(i) => currentRound = i"/>
          </div>
          <div v-if="currentRound==2">
            <div class="text-center">
              <v-chip size="large" color="primary">Round {{ currentRound }}</v-chip>
            </div>
            <cookingBurger :display2Name="display2Name" :admin="admin" :key="currentRound "/>
          </div>
          <div v-if="currentRound==3">
            <div class="text-center">
              <v-chip size="large" color="primary">Round {{ currentRound }}</v-chip>
            </div>
            Game 3
          </div>
        </div>
      </VCard>
    </VCol>

    <VCol
      cols="6"
      md="2"
      xs="6"
      class="order-md-last"
    >
      <playerProfile class="player2main" :class="{nomatch:!match}" :you="false" :displayName="display2Name"
                     :displayAddress="player2Address"/>
    </VCol>
  </VRow>
  <VRow class="match-height plants" v-if="match">
    <VCol cols="0" md="1" lg="1" xs="0"></VCol>
    <VCol
      cols="6"
      md="2"
      xs="6"
    >
      <VImg
        class="auth-footer-start-tree d-none d-md-block mt-10"
        :src="authV1Tree"
        :width="250"
      />
    </VCol>
    <VCol cols="12" xs="12" md="6" lg="6" id="gameDiv" class="order-last">
    </VCol>

    <VCol
      cols="6"
      md="2"
      xs="6"
      class="order-md-last"
    >
      <VImg
        class="auth-footer-start-tree d-none d-md-block mt-10"
        :src="authV1Tree2"
        :width="250"
      />
    </VCol>
  </VRow>

  <VDialog
    v-model="showNameDialog"
    width="800px"
    max-width="80%"
  >
    <VCard>
      <VCard-text>
        <pfpPicker :dName="dName"/>
      </VCard-text>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

.nomatch {
  animation: animName 0.5s linear infinite;
  filter: blur(10px);
}

@keyframes animName {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
