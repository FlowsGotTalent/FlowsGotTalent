<script setup>
const projectList = [
  {
    title: 'Sales',
    icon: 'mdi-trending-up',
  },
  {
    title: 'Sales',
    icon: 'mdi-trending-up',
  },
  {
    title: 'Sales',
    icon: 'mdi-trending-up',
  },
  {
    title: 'Sales',
    icon: 'mdi-trending-up',
  }
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Compatible Projects</VCardTitle>
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol>
          <VRow>
            <VCol
              v-for="item in projectList"
              :key="item.title"
              cols="6"
              sm="3"
            >
              <div class="d-flex align-center">
                <div class="me-3">
                  <VAvatar
                    :color="item.color"
                    rounded
                    size="42"
                    class="elevation-1"
                  >
                    <VIcon
                      size="24"
                      :icon="item.icon"
                    />
                  </VAvatar>
                </div>

                <div class="d-flex flex-column">
              <span class="text-caption">
                {{ item.title }}
              </span>
                  <span class="text-h6 font-weight-medium">{{ item.stats }}</span>
                </div>
              </div>
            </VCol>
          </VRow>
        </VCol>
        <VCol>
          <p class="text-center mx-auto mb-3">Represent your tribe. Play for fun or play to win or play.</p>
          <VImg :src="require('@/assets/images/landingpage/supported.webp')">
          </VImg>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
