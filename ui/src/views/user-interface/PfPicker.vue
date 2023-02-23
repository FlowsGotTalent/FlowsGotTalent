<script>

import * as fcl from "@onflow/fcl";
import * as t from '@onflow/types';

const api = "https://rest-mainnet.onflow.org";
fcl.config().put("accessNode.api", api);
export default {
  name: 'pfpicker',
  props: {
    dName: String,
  },
  data() {
    return {
      startLogin: false,
      address: '0x3cbb4897e52fcc31',
      nftList: [],
      pfp: '',
      user: {
        name: this.dName,
        email: '',
      },
    }
  },
  mounted() {
    this.address = localStorage.getItem('flowAddress') || ''
    if (localStorage.getItem('flowName') || false) {
      this.user.name = localStorage.getItem('flowName') || ''
    }
    if (localStorage.getItem('flowEmail') || false) {
      this.user.email = localStorage.getItem('flowEmail') || ''
    }
    this.getNFTS()
  },
  methods: {
    async getNFTS() {
      const cadenceQuery = `
      import Flovatar from 0x921ea449dffec68a
      pub fun main(address:Address) : [Flovatar.FlovatarData] {
        return Flovatar.getFlovatars(address: address)
      }`
      const UFCstrike = `
  import NonFungibleToken from 0x1d7e57aa55817448
  import UFC_NFT from 0x329feb3ab062d289


  pub fun main(address: Address): [UInt64] {
      let account = getAccount(address)

      let collectionRef = account.getCapability(UFC_NFT.CollectionPublicPath).borrow<&{NonFungibleToken.CollectionPublic}>()
          ?? panic("Could not borrow capability from public collection")

    return collectionRef.getIDs()
    }`
      console.log(cadenceQuery)
      const idsResponse = await fcl.send([
        fcl.script`${UFCstrike}`,
        fcl.args([fcl.arg(this.address, t.Address)]),
      ])
      this.nftList = await fcl.decode(idsResponse)
      console.log(this.nftList)
    },
    save() {
      localStorage.setItem('flowName', this.user.name)
      localStorage.setItem('flowEmail', this.user.email)
      localStorage.setItem('flowPFP', this.pfp)
      window.location.href = '/play' // force page load to get localstorage
    }
  }
}
</script>
<template>
  <div id="pfppicker">
    <VTextField
      class="mx-auto text-center d-block ma-2"
      style="max-width:200px;"
      v-model="user.name"
      label="Display Name"></VTextField>

    <p class="text-center ma-4"> Choose your PFP/Character</p>

    <v-sheet
      class="mx-auto"
      max-width="800"
    >
      <v-slide-group
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-btn
            class="ma-2"
            rounded
            :color="isSelected ? 'primary' : undefined"
            @click="toggle"
          >
            Options {{ n }}
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

    <v-text-field
      class="mx-auto text-center d-block ma-2"
      style="max-width:200px;"
      v-model="user.email"
      label="Email"></v-text-field>
    <p class="text-xs ml-5 text-center">We need this to contact you if you win any prizes</p>
    <div class="text-center mx-auto">
      <VBtn @click="save">Save</VBtn>
    </div>
  </div>
</template>
