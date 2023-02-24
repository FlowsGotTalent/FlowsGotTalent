<script setup>
import AnalyticsSalesByCountries from '@/views/dashboards/analytics/AnalyticsSalesByCountries.vue'
import CompatibleProjects from '@/views/dashboards/CompatibleProjects.vue'
</script>

<template>

  <div class="mx-auto text-center ma-8">

    <VRow>
      <VCol cols="12">
        <h1>Welcome to Flow's Got Talent</h1>
        <p>Choose your fave PFP as your in-game character, level up and go for glory!</p>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <p>Play up-to 10 rounds of knockout mini-games testing your speed, witt, dexterity and luck! </p>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        Images
      </VCol>
      <VCol>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="6" clsss="mt-6 d-flex align-stretch">

        <VCard>
          <VCardText>
            <h3>Connect your Flow or Dapper Wallet and start playing -><br> Flow's got Talent!</h3>
            <VBtn to="/play" color="primary" outlined class="ma-4">
              <VIcon
                start
                icon="mdi-star-shooting-outline"
              />
              Start Playing
            </VBtn>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="6" clsss="mt-6 d-flex align-stretch">

        <VCard>
          <VCardText>
            <h3>New to NFTs? Or don't have have Flow PFP (Profile Picture)? <br>We got you!</h3>
            <VBtn to="/mint" color="success" outlined class="ma-4">
              <VIcon
                start
                icon="mdi-gift"
              />
              Free FGT NFT
            </VBtn>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
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
    >
      LeaderBoard
      <AnalyticsSalesByCountries/>
    </VCol>
    <VCol
      cols="6"
      md="6"
    >
      Recent Activity
      <AnalyticsSalesByCountries/>
    </VCol>
  </VRow>
</template>
