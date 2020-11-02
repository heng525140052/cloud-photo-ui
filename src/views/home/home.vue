<template>
  <div>
    <v-card
        class="mx-auto"
        width="300"
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group
            :value="true"
            prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-title>我的文件</v-list-item-title>
          </template>

          <v-list-item
              v-for="([title,icon, href], i) in files"
              :key="i"
              link
              :href="href"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>

        </v-list-group>
      </v-list>
    </v-card>

    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
    // files: [
    //   {
    //     text: 'Video',
    //     disabled: 'mdi-plus-outline',
    //     href: 'video'
    //   }, {
    //     text: 'Images',
    //     disabled: 'mdi-file-outline',
    //     href: 'images'
    //   }, {
    //     text: 'Audio',
    //     disabled: 'mdi-update',
    //     href: 'audio'
    //   }, {
    //     text: 'Doc',
    //     disabled: 'mdi-delete',
    //     href: 'doc'
    //   },
    // ],
    files: [
      ['Video', 'mdi-plus-outline', 'video'],
      ['Images', 'mdi-file-outline', 'images'],
      ['Audio', 'mdi-update', 'audio'
      ], [
        'Doc',
        'mdi-delete',
        'doc'
      ],
    ],
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],

  }),
}
</script>

<style scoped>

</style>
