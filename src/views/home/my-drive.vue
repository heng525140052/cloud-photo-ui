<template>
  <div id="home" class="pa-4">
    <v-container fluid>
      <h3 class="headline font-weight-medium">文件</h3>
      <v-row>
        <v-col
            cols="12"
            sm="12"
            md="5"
            lg="2"
            v-for="(drive,i) in file_list"
            :key="i"
            class="mx-xs-auto"
        >
          <v-skeleton-loader type="card-avatar" :loading="loading">
            <drive-card
                :card="{ maxWidth: 350 }"
                :drive="drive"
                :channel="channel"
            ></drive-card>

          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import AliOssController from "../../api/alioss";
import DriveCard from '../../components/DriveCard'


export default {
  data() {
    return {
      menuDir: '',
      dir_list: [],
      file_list: [],
      loading: false,
      channel: {
        url: '/channels/12',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      }

    }
  },
  filters: {},
  components: {
    DriveCard
  },
  mounted() {
    // setTimeout(() => {
    //   this.loading = false
    // }, 3000)

    this.fileList()
  },
  methods: {

    dirList() {
      this.dir_list = AliOssController.listDir(this.menuDir);
    },
    fileList() {

      const params = {
        prefix: "",
        marker: "",
        max_keys: 20,
      }

      AliOssController.ObjectList(params).then(data => {
        this.file_list = data.objects
      });


    },
  }
}
</script>

<style scoped>

</style>
