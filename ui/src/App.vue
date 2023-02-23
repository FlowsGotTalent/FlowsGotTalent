<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

const avatarBadgeProps = {
  dot: true,
  location: 'bottom right',
  offsetX: 3,
  offsetY: 3,
  color: 'success',
  bordered: true,
}
</script>
<script>
// Components
import Footer from '@/layouts/components/Footer.vue'

export default {
  data: () => ({
    drawer: false,
    isMobile: true,
    group: null,
    startLogin: false,
    address: '',
    user: {
      name: '',
      pfp: '',
    },
  }),
  mounted() {
    this.checkIsMobile()
    this.address = localStorage.getItem('flowAddress')
    this.user.name = localStorage.getItem('flowName')
    this.user.pfp = localStorage.getItem('flowPfp') || avatar1
  },
  methods: {
    checkIsMobile() {
      if (window.innerWidth > 600) {
        this.isMobile = false
      } else {
        this.isMobile = true
      }
      this.drawer = !this.isMobile
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
<style>
.text-xs {
  font-size: 0.75rem;
}

.text-sm {
  font-size: 0.75rem;
}

.text-muted {
  color: #6c757d;
}

</style>

<template>
  <VApp>
    <v-layout>
      <v-app-bar>
        <v-img
          height="52px"
          :src="require('@/assets/logo.png')"
        ></v-img>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>


        <VSpacer/>
        <VBtn v-if="!address" to="/play" color="primary" variant="tonal" outlined class="mr-4">
          <VIcon
            start
            icon="mdi-star-shooting-outline"
          />
          Start Playing
        </VBtn>
        <div v-if="address" class="mr-4">
          <VBadge v-bind="avatarBadgeProps">
            <VAvatar
              style="cursor: pointer;"
              color="primary"
              variant="tonal"
            >
              <VImg :src="user.pfp"/>

              <!-- SECTION Menu -->
              <VMenu
                activator="parent"
                width="230"
                location="bottom end"
                offset="14px"
              >
                <VList>
                  <!-- 👉 User Avatar & Name -->
                  <VListItem>
                    <template #prepend>
                      <VListItemAction start>
                        <VBadge v-bind="avatarBadgeProps">
                          <VAvatar
                            color="primary"
                            size="40"
                            variant="tonal"
                          >
                            <VImg :src="user.pfp"/>
                          </VAvatar>
                        </VBadge>
                      </VListItemAction>
                    </template>

                    <VListItemTitle class="font-weight-semibold">
                      {{ this.user.name || '' }}
                    </VListItemTitle>
                    <VListItemSubtitle class="text-disabled">
                      {{ address }}
                    </VListItemSubtitle>
                  </VListItem>

                  <VDivider class="my-2"/>

                  <!-- 👉 Settings -->
                  <VListItem link to="/settings">
                    <template #prepend>
                      <VIcon
                        class="me-2"
                        icon="mdi-cog-outline"
                        size="22"
                      />
                    </template>

                    <VListItemTitle>Settings</VListItemTitle>
                  </VListItem>


                  <!-- 👉 FAQ -->
                  <VListItem link>
                    <template #prepend>
                      <VIcon
                        class="me-2"
                        icon="mdi-help-circle-outline"
                        size="22"
                      />
                    </template>

                    <VListItemTitle>FAQ</VListItemTitle>
                  </VListItem>

                  <!-- Divider -->
                  <VDivider class="my-2"/>

                  <!-- 👉 Logout -->
                  <VListItem to="/login">
                    <template #prepend>
                      <VIcon
                        class="me-2"
                        icon="mdi-logout-variant"
                        size="22"
                      />
                    </template>

                    <VListItemTitle>Logout</VListItemTitle>
                  </VListItem>
                </VList>
              </VMenu>
              <!-- !SECTION -->
            </VAvatar>
          </VBadge>

        </div>

      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list nav>
          <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-star-shooting" title="Enter Competition"
                       to="/play"></v-list-item>
          <v-list-item prepend-icon="mdi-crown" title="Leaderboards"
                       to="/leaderboards"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Compatible Projects"
                       to="/projects  "></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <v-row dense>
            <v-col cols="12">
              <RouterView/>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </VApp>
</template>
