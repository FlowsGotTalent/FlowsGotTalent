<script>
export default {
  name: "CookingBurger",
  props: ['display1Name', 'display2Name', 'player1Address', 'player2Address', 'admin'],
  data() {
    return {
      gameName: false,
      gameTitle: 'Cooking',
      gamedesc: 'Make the best burger, the fastest!',
      currentRound: 2,
      won: false,
    }
  },
  mounted() {},
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
.score {
  font-family: monospace;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  margin: 1rem;
  position: relative;
  transition: opacity 0.2s;
}

#play-again-btn {
  position: absolute;
  top: -0.5rem;
  left: 50%;
  margin-left: -50px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #111;
  border: 5px double #fff;
  border-radius: 14px;
  padding: 8px 10px;
  outline: none;
  letter-spacing: .05em;
  cursor: pointer;
  display: none;
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s, background-color 0.2s;
}

#play-again-btn:hover {
  background-color: #333;
}

#play-again-btn:active {
  background-color: #555;
}

#play-again-btn.play-again-btn-entrance {
  opacity: 1;
  transform: translateX(6rem);
}

.draggable-items {
  display: flex;
  justify-content: center;
  margin: 1rem 1rem 1.5rem 1rem;
  transition: opacity 0.5s;
}

.draggable {
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  margin: 0rem 0.5rem;
  cursor: move;
  transition: opacity 0.2s;
}

.draggable:hover {
  opacity: 0.5;
}

.matching-pairs {
  transition: opacity 0.5s;
}

.matching-pair {
  height: 6rem;
  width: 22rem;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
}

.matching-pair span {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  user-select: none;
}

.label {
  width: 15rem;
  font-size: 2rem;
}

.droppable {
  width: 6rem;
  font-size: 4rem;
  background-color: #fff;
  border: 3px dashed #111;
  transition: 0.2s;
}

.droppable-hover {
  background-color: #bee3f0;
  transform: scale(1.1);
}

.dropped {
  border-style: solid;
}

.dragged {
  user-select: none;
  opacity: 0.1;
  cursor: default;
}

.draggable.dragged:hover {
  opacity: 0.1;
}

@media (max-width: 600px) {
  html {
    font-size: 14px;
  }

  #play-again-btn {
    top: -0.4rem;
  }

  #play-again-btn.play-again-btn-entrance {
    transform: translateX(7rem);
  }
}
</style>

<template>
  <div class="mx-auto text-center">
    <h2>
      {{ gameTitle }}
    </h2>
    <p>{{gamedesc}}</p>
  </div>
  <VRow>
    <VCol
      cols="12"
      md="12"
      class="text-center mx-auto"
    >
      <div class="text-gray-600 text-center mx-auto">

        <main class="container mx-auto mt-3">

          <!--Burger-->
          <div class="burger">
            <iframe id="gameIframe" width="100%" height="540px" frameborder="0"  scrolling="no" src="/games/BurgerGame/index.html"></iframe>
          </div>

        </main>

      </div>
    </VCol>
  </VRow>

</template>

