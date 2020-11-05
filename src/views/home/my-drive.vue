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
      menuDir: '/',
    }
  },
  filters: {},
  methods: {


    testClick() {

      const aa = AliOssController.listDir(this.menuDir);
      console.log(aa,'------------------')

      // AliOssController.Objectlist()

    },
  }
}
</script>

<style scoped>

</style>
