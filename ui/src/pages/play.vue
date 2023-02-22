<script setup>
import playerProfile from '@/views/games/PlayerProfile.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
    >
      <div class="text-center mx-auto">
        <h2>
          <VIcon
            start
            icon="mdi-account-search"
          />
          Match Making...
        </h2>
        <VProgress-circular
          class="mt-6"
          indeterminate
          color="primary"
        ></VProgress-circular>
      </div>
    </VCol>
  </VRow>
  <VRow class="match-height">
    <VCol cols="0" md="1" lg="1" xs="0"></VCol>
    <VCol
      cols="2"
      md="2"
      xs="4"
    >
      <playerProfile :you="true"/>
    </VCol>
    <VCol cols="6" xs="4"></VCol>

    <VCol
      cols="2"
      md="2"
      xs="34"
    >
      <playerProfile :you="false"/>
    </VCol>
  </VRow>

</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
