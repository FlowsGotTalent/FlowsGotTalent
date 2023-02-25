<script setup>
import logo from '@/assets/logo.png'

</script>
<script>
export default {
  name: 'mainView',
  data() {
    return {
      address: '',
      user: {
        name: '',
      },
    }
  },
  mounted() {
    this.address = localStorage.getItem('flowAddress') || ''
    this.user.name = localStorage.getItem('flowName') || ''
  }
}
</script>

<template>
  <!-- 👉 Nav header -->
  <div class="nav-header">
    <RouterLink
      to="/"
      class="app-logo d-flex align-center gap-x-3 app-title-wrapper"
    >
      <VImg :src="logo" class="app-logo-image"></VImg>
    </RouterLink>
  </div>

  <!-- 👉 Nav items -->
  <ul>
    <VerticalNavLink
      :item="{
        title: 'Home',
        to: 'index',
        icon: { icon: 'mdi-home-outline' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Enter Competition',
        to: 'play',
        icon: { icon: 'mdi-star-shooting-outline' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Spectate',
        to: 'spectate',
        params: { spectate: true },
        icon: { icon: 'mdi-hand-clap' }
      }"
    />

    <VerticalNavLink
      :item="{
        title: 'Leaderboards',
        to: 'leaderboards',
        icon: { icon: 'mdi-crown-outline' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Compatible Projects',
        to: 'tables',
        icon: { icon: 'mdi-account-multiple-check-outline' }
      }"
    />
  </ul>

  <!-- 👉 illustration -->
</template>

<style lang="scss">
// .v-navigation-drawer {
//   height: 100%;

//   .v-navigation-drawer__content {
//     display: flex;
//     flex-direction: column;

//     > ul {
//       flex-grow: 1;
//     }
//   }
// }

.upgrade-banner {
  margin-top: auto;
  // position: absolute;
  // bottom: 13px;
  // left: 50%;
  // transform: translateX(-50%);
}
</style>
