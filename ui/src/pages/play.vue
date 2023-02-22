<script setup>
import playerProfile from '@/views/games/PlayerProfile.vue'
import spr from '@/views/games/ScissorsPaperRock.vue'
import {uniqueNamesGenerator, adjectives, animals} from 'unique-names-generator';
</script>
<script>
export default {
  data() {
    return {
      match: false,
      display1Name: this.name,
      display2Name: '',
      player1Address: 'test1',
      player2Address: 'test2',
      admin:true,
    }
  },
  mounted() {
    this.getMatch()
  },
  methods: {
    getMatch() {
      this.match = true
      console.log('getMatch')
      if (!this.display1Name) {
        this.display1Name = uniqueNamesGenerator({
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
      cols="2"
      md="2"
      xs="4"
    >
      <playerProfile :you="true" :displayName="display1Name" :displayAddress="player1Address"/>
    </VCol>
    <VCol cols="6" xs="4" id="gameDiv">
      <spr :display2Name="display2Name" :admin="admin"/>
    </VCol>

    <VCol
      cols="2"
      md="2"
      xs="34"
    >
      <playerProfile :you="false" :displayName="display2Name" :displayAddress="player2Address"/>
    </VCol>
  </VRow>

  <div>
    <v-layout class="pa-5 ma-10">
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
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
