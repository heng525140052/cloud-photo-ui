<template>
  <v-card
      class="mx-auto overflow-hidden"
      height="1400"
  >
    <v-app-bar
        color="deep-purple"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-group
            :value="true"
            prepend-icon="mdi-account-circle"
        >

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>我的云端硬盘</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
              v-for="(dir, i) in dirs"
              :key="i"
              link
          >
            <v-list-item-title v-text="dir.title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="dir.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>

    </v-navigation-drawer>
    <v-container>
      <v-layout row>
        <v-flex xs12 md8 offset-md2>
          <v-slide-y-transition mode="out-in">
            <router-view></router-view>
          </v-slide-y-transition>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>

</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      drawer: false,
      group: null,
      selectedDir: 0,
      dirs: [
        {title: 'Audio', icon: 'mdi-folder', href: 'audio'}
      ],
    }

  },
}
</script>

<style>

</style>
