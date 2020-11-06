<template>
  <div>
    <div class="text-center">
      <v-btn
          rounded
          color="primary"
          dark
          @click="testClick()"
      >
        Rounded Button
      </v-btn>
    </div>
    哈哈哈哈哈哈哈哈哈哈或或或或或或或
    哈哈哈哈哈哈哈哈哈哈或或或或或或或
    哈哈哈哈哈哈哈哈哈哈或或或或或或或
    哈哈哈哈哈哈哈哈哈哈或或或或或或或
    哈哈哈哈哈哈哈哈哈哈或或或或或或或
    哈哈哈哈哈哈哈哈哈哈或或或或或或或
    哈哈哈哈哈哈哈哈哈哈或或或或或或或
    哈哈哈哈哈哈哈哈哈哈或或或或或或或
    哈哈哈哈哈哈哈哈哈哈或或或或或或或
  </div>

</template>

<script>
// import {UserRegist} from "@/api/product";
// import util from '@/libs/util.js'
// import axios from 'axios';
// eslint-disable-next-line no-unused-vars
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
    testClick() {



    },
  }
}
</script>

<style scoped>

</style>
