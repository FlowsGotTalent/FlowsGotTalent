<script setup>
import DrawerContent from './DrawerContent.vue'
import {VerticalNavLayout} from '@layouts'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
</script>
<script>
export default {
  name: 'mainView',
  data() {
    return {
      startLogin: false,
      address: '',
      user: {
        name: '',
      },
    }
  },
  mounted() {
    this.address = localStorage.getItem('flowAddress')
    this.user.name = localStorage.getItem('flowName')
  },
  methods: {}
}
</script>


<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar>
      <VSpacer/>
      <VBtn v-if="!address" to="/play" color="primary" variant="tonal" outlined>
        <VIcon
          start
          icon="mdi-star-shooting-outline"
        />
        Start Playing
      </VBtn>
      <NavbarThemeSwitcher/>
      <div v-if="address">
        <UserProfile/>
      </div>
    </template>

    <!-- 👉 Drawer content -->
    <template #navigation-drawer-content>
      <DrawerContent/>
    </template>

    <!-- 👉 Pages -->
    <div class="layout-page-content">
      <RouterView/>
    </div>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer/>
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss">
.app-bar-search {
  .v-input__control {
    width: 236px
  }

  .v-field__outline__start {
    border-radius: 28px 0 0 28px !important;
    flex-basis: 20px !important;
  }

  .v-field__outline__end {
    border-radius: 0 28px 28px 0 !important;
  }
}
</style>
