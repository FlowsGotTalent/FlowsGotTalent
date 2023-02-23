<script setup>
import {useTheme} from 'vuetify'
import logo from '@/assets/logo.png'
import authV1MaskDark from '@/assets/images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@/assets/images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'

const vuetifyTheme = useTheme()
const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})
</script>

<script>

import * as fcl from "@onflow/fcl";

fcl.config({
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "discovery.authn.endpoint": "https://fcl-discovery.onflow.org/api/testnet/authn",
  'discovery.wallet.method': 'POP/RPC',
  'accessNode.api': 'https://access-mainnet-beta.onflow.org',
  'app.detail.title': 'DapZap',
  'app.detail.icon': 'https://dapzap.com/logo.png',
})

export default {
  name: 'LoginView',
  props: {
    fontColor: {
      type: String,
      default: 'black'
    },
    backgroundColor: {
      type: String,
      default: '#eee'
    },

  },
  data() {
    return {
      startLogin: false,
      address: ''
    }
  },
  created() {
  },
  methods: {
    loginFlow() {
      fcl.config({
        "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
      })
      fcl.authenticate()
      this.authenticate()
    },
    loginDapper() {
      fcl.config({
        "discovery.wallet": "https://accounts.meetdapper.com/fcl/authn-restricted",
      })
      this.authenticate()
    },
    authenticate() {
      fcl.authenticate().then(user => {
        this.address = user.addr
        console.log(user)
      })
    },
    logOut() {
      fcl.unauthenticate()
      this.address = ''
    }
  },
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-3">
    <VCard
      class="auth-card pa-4 pt-2 mb-0 pb-0"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
        </template>
      </VCardItem>

      <VImg :src="logo" class="d-block mx-auto mt-0 pt-0" style="max-width: 250px"></VImg>
      <VCardText class="pt-2">
        <h6 class="text-h6 font-weight-semibold mb-1 text-center">
          👋🏻 Connect your flow wallet to get started!
        </h6>
        <p class="mb-0">
        </p>
      </VCardText>

      <VCardText>
        <div class="mx-auto text-center">
          <VBtn>Connect</VBtn>
        </div>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
layout: blank
</route>
