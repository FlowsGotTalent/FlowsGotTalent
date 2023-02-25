<script setup>
import logo from '@/assets/logo.png'
import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'
</script>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import * as fcl from "@onflow/fcl";

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
      address: '',
      loading: false,
      user: {
        name: '',
      },
    }
  },
  mounted() {
    this.address = localStorage.getItem('flowAddress') || ''
    this.user.name = localStorage.getItem('flowName') || ''
  },
  methods: {
    login(wallet) {
      this.loading = true
      if (wallet === 'dapper') {
        fcl.config({
          "discovery.wallet": "https://accounts.meetdapper.com/fcl/authn-restricted",
          'discovery.wallet.method': 'POP/RPC',
          'accessNode.api': 'https://access-mainnet-beta.onflow.org',
          'app.detail.title': 'Flow\'s Got Talent',
          'app.detail.icon': 'https://flowsgottalent.com/logo.png',
        })
      } else {
        fcl.config({
          "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
          "discovery.authn.endpoint": "https://fcl-discovery.onflow.org/api/testnet/authn",
          'accessNode.api': 'https://access-testnet-beta.onflow.org',
          'app.detail.title': 'Flow\'s Got Talent',
          'app.detail.icon': 'https://flowsgottalent.com/logo.png',
        })
      }

      fcl.authenticate()
      this.authenticate()
    },
    authenticate() {
      this.loading = true
      fcl.authenticate().then(user => {
        if (user.addr) {
          this.address = user.addr
          localStorage.setItem('flowAddress', user.addr)
          console.log(user)

          firebase.auth().signInAnonymously().then(() => {
            this.loading = false
            window.location.href = '/play' // force page load to get localstorage
          }).catch((e) => {
            console.log(e)
          })
        }
      })
    },
    logOut() {
      fcl.unauthenticate()
      this.address = ''
      localStorage.setItem('flowAddress', '')
      localStorage.setItem('flow', '')
      this.$router.go('/')

    }
  },
}
</script>

<template>
  <div class="d-flex align-center justify-center mx-auto mt-10">

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />
    <VCard
      class="auth-card pa-4 mb-0 pb-0"
      max-width="448"
    >
      <VImg :src="logo" class="d-block mx-auto mt-0 pt-0" style="max-width: 250px"></VImg>
      <VCardText class="pt-2">
        <div v-if="!address">
          <h6 class="text-h6 font-weight-semibold mb-1 text-center">
            👋🏻 Connect your wallet to get started!
          </h6>
        </div>
        <div v-else class="mx-auto text-center mt-4">
          <h3>✅ Connected to Flow.</h3>
        </div>
      </VCardText>

      <VCardText>
        <div class="mx-auto text-center">
          <div v-if="address">
            <v-chip v-if="user.name.length>1" class="text-capitalize">{{ user.name }}</v-chip>
            <br>
            <v-chip class="ma-2">Flow Address: {{ address }}</v-chip>
            <br>
            <VBtn class="ma-4" @click="logOut">Logout</VBtn>
          </div>
          <div v-else>
            <VRow>
              <VCol>
                <VBtn @click="login('flow')" color="success" :loading="loading">Flow Wallet</VBtn>
              </VCol>
              <VCol>
                <VBtn @click="login('dapper')" color="primary" :loading="loading">Dapper Wallet</VBtn>
              </VCol>
            </VRow>
          </div>
        </div>
        <div v-if="!address">
          <p class="ma-4 text-center mx-auto text-sm">
            Don't own a Flow/Dapper NFT yet?<br>
            <VBtn size="small" color="default" variant="tonal" outlined class="mt-2"
                  href="https://www.flowverse.co/categories/marketplaces"
                  target="_new"> Flow Marketplaces
            </VBtn>
          </p>
        </div>
      </VCardText>
    </VCard>

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />
  </div>
</template>
