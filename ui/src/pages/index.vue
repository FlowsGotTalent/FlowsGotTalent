<script setup>
import AnalyticsDepositWithdraw from '@/views/dashboards/analytics/AnalyticsDepositWithdraw.vue'
import AnalyticsSalesByCountries from '@/views/dashboards/analytics/AnalyticsSalesByCountries.vue'
import AnalyticsTransactions from '@/views/dashboards/analytics/AnalyticsTransactions.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="4"
    >
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsTransactions/>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsSalesByCountries/>
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsDepositWithdraw/>
    </VCol>
  </VRow>
</template>
