<script setup>
import playerProfile from '@/views/games/PlayerProfile.vue'
import spr from '@/views/games/ScissorsPaperRock.vue'
import pfpPicker from '@/views/user-interface/PfPicker.vue'
import {uniqueNamesGenerator, adjectives, animals} from 'unique-names-generator';
</script>
<script>
export default {
  data() {
    return {
      match: false,
      pfp1: '',
      dName: '',
      display1Name: '',
      display2Name: '',
      player1Address: 'test1',
      player2Address: 'test2',
      admin: true,
      currentRound: 1,
      showNameDialog: false,
      isMobile: true,
    }
  },
  mounted() {
    this.checkIsMobile()
    this.player1Address = localStorage.getItem('flowAddress') || ''
    this.display1Name = localStorage.getItem('flowName') || ''
    if (this.player1Address) {
      this.getMatch()
    } else {
      this.$router.push('/login')
    }
    if (!this.display1Name) {
      this.showNameDialog = true
    }
  },
  methods: {
    checkIsMobile() {
      if (window.innerWidth > 600) {
        this.isMobile = false
      } else {
        this.isMobile = true
      }
    },
    getMatch() {
      this.match = true
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
  <VRow class="match-height" v-if="!match">
    <VCol
      cols="12"
    >
      <div class="text-center mx-auto">
        <h2>
          <VIcon
            start
            icon="mdi-account-search"
          />
          Match Making...
        </h2>
        <VProgress-circular
          class="mt-6"
          indeterminate
          color="primary"
        ></VProgress-circular>
      </div>
    </VCol>
  </VRow>
  <VRow class="match-height">
    <VCol cols="0" md="1" lg="1" xs="0"></VCol>
    <VCol
      cols="6"
      md="2"
      xs="6"
    >
      <playerProfile class="player1main" :you="true" :displayName="display1Name" :displayAddress="player1Address"/>
    </VCol>
    <VCol cols="12" xs="12" md="6" lg="6" id="gameDiv" class="order-last">
      <div class="bg-white pa-10 ma-0">
        <div v-if="!match">
          <h4 class="text-center ma-4">Finding a worthy adversary...</h4>
          <p class="text-center">If no opponent is found you will be matched with computer player.</p>
          <p class="text-center text-sm">Computer players use PFP NFTs from the pool of real players.<br>(In the future
            this will be limited to those being lent out FGT).</p>
        </div>
        <div v-else>
          <div v-if="!currentRound || currentRound==1">
            <spr :display2Name="display2Name" :admin="admin"/>
          </div>
        </div>
      </div>
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
