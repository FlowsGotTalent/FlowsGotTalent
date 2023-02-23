<script setup>
</script>

<template>
  <VApp>
    <v-layout>
      <v-app-bar title="Application bar"></v-app-bar>

      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="min-height: 300px;  max-width: 96%" class="ma-6 mt-10">
        <RouterView/>
      </v-main>
    </v-layout>
  </VApp>
</template>
