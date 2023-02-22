<script setup>
import playerProfile from '@/views/games/PlayerProfile.vue'
import {uniqueNamesGenerator, adjectives, animals} from 'unique-names-generator';


import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'


const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
]
const isCardDetailsVisible = ref(false)
</script>
<script>
export default {
  props: ['you', 'address', 'name'],
  data() {
    return {
      cardBg1: 'https://source.unsplash.com/300x200/?abstract green',
      cardBg2: '',
      displayName: this.name,
      displayAddress: 'test',
      rating: false,

    }
  },
  mounted() {
    if (!this.you) {
      this.cardBg2 = 'https://source.unsplash.com/300x200/?abstract blue'
    }
    if (!this.name) {
      this.displayName = uniqueNamesGenerator({
        dictionaries: [adjectives, animals]
      }).replace('_', ' ')
    }
  }
}
</script>
<style>
.pfp img {
  border-radius: 50%;
  height: 100%;
  width: 100%;
  display: block;
}

.pfp {
  position: relative;
  margin-top: -120px !important;
}
</style>
<template>
  <div>
    <h2 class="text-center mx-auto" v-if="you">
      <v-chip size="large" color="success" variant="tonal" class="font-weight-semibold">Player 1 (You): {{ address }}
      </v-chip>
    </h2>
    <h2 class="text-center mx-auto" v-else>
      <v-chip size="large" color="info" variant="tonal" class="font-weight-semibold">Player 2: {{ address }}</v-chip>
    </h2>
    <VCard class="mt-3">
      <VImg v-if="you" :src="cardBg1"/>
      <VImg v-else :src="cardBg2"/>
      <div class="pfp mx-4 mb-0 pb-0">
        <VAvatar
          size="100%"
          class="avatar-center mx-auto text-center "
          :image="avatar1"
        />
      </div>

      <h4 class="pa-2 pb-0 mb-0 text-sm text-capitalize font-weight-semibold text-center" v-if="displayName">
        <v-chip v-if="you" size="large" color="success">{{ displayName }}</v-chip>
        <v-chip v-else size="large" color="info">{{ displayName }}</v-chip>
      </h4>
      <div class="mx-auto text-center">
        <v-chip size="small" outlined class="mx-2 mt-2 mb-0 pb-0">{{ displayAddress }}</v-chip>
      </div>
      <VCardText class="position-relative mt-0 p0">
        <div v-if="rating">
          <VRating
            :model-value="5"
            readonly
            class="me-3"
            density="compact"
          />
          <span>5 Star | 98 reviews</span>
        </div>

        <!--  Mutual Friends -->
        <div class="mt-0 mx-auto d-block text-center">
          <p class="font-weight-medium text-center">Other PFP/Collections</p>
          <div class="v-avatar-group mx-auto text-center">
            <VAvatar
              v-for="avatar in avatars"
              :key="avatar"
              :image="avatar"
              size="45"
            />
          </div>
        </div>
      </VCardText>
    </VCard>
  </div>
</template>
