<script setup>
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

</script>
<script>
export default {
  props: ['you', 'displayAddress', 'displayName'],
  data() {
    return {
      cardBg1: 'https://source.unsplash.com/300x200/?abstract green',
      avatarBg1: 'https://source.unsplash.com/300x200/?abstract green',
      cardBg2: '',
      rating: false,
      user: {
        name: '',
        pfp: `https://flovatar.com/api/image/${Math.floor(1000 + Math.random() * 3000)}`,
      },
    }
  },
  mounted() {
    if (this.you) {
      if (localStorage.getItem('flowPfp') || false) {
        this.user.pfp = localStorage.getItem('flowPfp')
      }
    } else {
      this.cardBg2 = 'https://source.unsplash.com/300x200/?abstract blue'
    }
  },
  methods: {
    changePFP() {
      this.$parent.$parent.$parent.showNameDialog = true
    },
  }
}
</script>
<template>
  <div>
    <h2 class="text-center mx-auto" v-if="you">
      <v-chip size="large" color="success" variant="tonal" class="font-weight-semibold">Player 1 (You)
      </v-chip>
    </h2>
    <h2 class="text-center mx-auto" v-else>
      <v-chip size="large" color="info" variant="tonal" class="font-weight-semibold">Player 2</v-chip>
    </h2>
    <VCard class="mt-3">
      <VImg v-if="you" :src="cardBg1"/>
      <VImg v-else :src="cardBg2"/>
      <div class="pfp mx-4 mb-1 pb-1 mx-auto text-center">
        <VAvatar
          @click="changePFP()"
          size="100%"
          class="avatar-center mx-auto text-center mt-5 elevation-8 bg-white bg-1"
          :class="{'p1': you, 'p2': !you}"
          :image="user.pfp"
          variant="elevated"
          style="max-width: 130px; cursor: pointer;"
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
        </div>

        <div class="mt-0 mx-auto text-center d-xs-none d-sm-none d-md-block">
          <p class="font-weight-medium text-center">Other PFP/Collections</p>
          <div class="v-avatar-group mx-auto text-center mt-1">
            <VAvatar
              class="ma-1"
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

.pfp .avatar-center.p2 {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.bg-white.bg-1.p2 {
  background-color: #e8f6ff !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3da10f", endColorstr="#18fc09", GradientType=1);
  box-shadow: 0px 0px 2px #47525d !important;
}

.bg-white.bg-1 {
  background-color: #edf8e7 !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3da10f", endColorstr="#18fc09", GradientType=1);
  box-shadow: 0px 0px 2px #47525d !important;
}
</style>

