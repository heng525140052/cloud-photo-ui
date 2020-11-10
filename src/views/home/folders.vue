<template>
  <div id="home" class="pa-4">
    <v-container fluid>
      <h3 class="headline font-weight-medium">Recommended</h3>
      <v-row>
        <v-col
            cols="12"
            sm="6"
            md="4"
            lg="2"
            v-for="i in loading ? 10 : 12"
            :key="i"
            class="mx-xs-auto"
        >
          <v-skeleton-loader type="card-avatar" :loading="loading">

            <v-card
                class="content-bg card mx-auto"
                max-width="350"
                flat
                tile
                router
            >
              <div class="images" v-viewer="{movable: false}">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    key="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    @click="show"
                ></v-img>
              </div>
              <button type="button" >Show</button>


              <v-row no-gutters>
                <v-col cols="2">
                  <v-list-item class="pl-0 pt-3" router to="/channels/12">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                          class="elevation-6"
                          src="https://randomuser.me/api/portraits/men/1.jpg"
                      ></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-col>
                <v-col>
                  <v-card-title class="pl-2 pt-3 subtitle-1 font-weight-bold">
                    Top western road trips
                  </v-card-title>

                  <v-card-subtitle class="pl-2 pb-0">
                    1,000 miles of wonder
                  </v-card-subtitle>
                  <v-card-subtitle class="pl-2 pt-0">
                    9.6k views
                    <v-icon>mdi-circle-small</v-icon>
                    6 hours ago
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>

import AliOssController from "@/api/alioss";

export default {
  data() {
    return {
      menuDir: '',
      dir_list: [],
      file_list: [],
    }
  },

  filters: {},
  mounted() {
    this.dirList()
  },
  methods: {

    dirList() {
      this.dir_list = AliOssController.listDir(this.menuDir);
    },
    fileList() {

      const params = {
        prefix: "",
        marker: "",
        max_keys: 10,
      }

      this.file_list = AliOssController.ObjectList(params);

      console.log('------------------')
      console.log(this.file_list)
      console.log('------------------')
    },
    show () {
      console.log('121213212312132123')
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    }
  }
}


</script>

<style scoped>

</style>