<script setup>
import AnalyticsSalesByCountries from '@/views/dashboards/AnalyticsSalesByCountries.vue'
import CompatibleProjects from '@/views/dashboards/CompatibleProjects.vue'
</script>

<template>

  <div class="mx-auto text-center my-8">
    <v-container fluid>
      <VRow>
        <VCol cols="12"  >
          <h1 class="text-white">Welcome to Flow's Got Talent</h1>
          <p class="text-white">Choose your fave PFP as your in-game character, level up and go for glory!</p>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <p class="text-white">Play knockout mini-games testing your speed, witt, dexterity and luck! </p>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
           // todo add screen shots
        </VCol>
        <VCol>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12" md="6" class="mt-6">
          <VCard>
            <VCardText>
              <h3 class="text-white">Connect your Flow or Dapper Wallet and start playing.</h3>
              <p class="ma-2 text-white">The best projects from around the flowverse gather for epic battles</p>
              <VBtn to="/play" color="success" outlined class="ma-4">
                <VIcon
                  start
                  icon="mdi-star-shooting-outline"
                />
                <span class="d-xs-none">Start</span> Play<span class="d-xs-none">ing</span>
              </VBtn>
            </VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="6" class="mt-6">
          <VCard>
            <VCardText>
              <h3 class="text-white">New to NFTs? Or don't have have Flow PFP. We got you!</h3>
              <p class="ma-2 text-white">Play as a Guest for your chance to win your first Flow NFT</p>
              <VBtn to="/login" color="primary" outlined class="ma-4">
                <VIcon
                  start
                  icon="mdi-gift"
                />
                <span class="d-xs-none">Start</span> Play<span class="d-xs-none">ing</span>
              </VBtn>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </v-container>
  </div>

  <VRow class="match-height">

    <VCol
      cols="12"
      md="12"
    >
      <CompatibleProjects/>
    </VCol>
    <VCol
      cols="6"
      md="6"
      class="text-white"
    >
      LeaderBoard
      <AnalyticsSalesByCountries class="d-none"/>
    </VCol>
    <VCol
      cols="6"
      md="6"
      class="text-white"
    >
      Recent Activity
      <AnalyticsSalesByCountries class="d-none"/>
    </VCol>
  </VRow>
</template>
