<script>

export default {
  props: ['display1Name', 'display2Name', 'player1Address', 'player2Address', 'admin'],
  data() {
    return {
      gameName: false,
      gameTitle: 'Farm Life',
      gameDesc: 'There\'s a fox on the prowl, help your dog heard the ship to the center to keep them safe.',
      currentRound: 4,
      won: false,
      scoreToBeat: 10,
      currentScore: 0,
    }
  },
  methods: {
    nextRound(round) {
      localStorage.setItem('fgtCurrentRound', round)
    },
  }
}
</script>
<style>
iframe#gameIframe {
  border-radius: 4px !important;
}
</style>
<template>
  <div class="mx-auto text-center">
    <h2>
      {{ gameTitle }}
    </h2>
    <p>{{ gameDesc }}</p>
  </div>
  <VRow>
    <VCol
      cols="12"
      md="12"
      class="text-center mx-auto"
    >
      <div class="text-gray-600 text-center mx-auto mt-3">

        <main class="container mx-auto">
          <iframe id="gameIframe" width="100%" height="540px" frameborder="0" scrolling="no"
                  src="/games/FarmLife/index.html"></iframe>
        </main>

      </div>
    </VCol>
  </VRow>

</template>

