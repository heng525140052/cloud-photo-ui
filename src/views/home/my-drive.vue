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
import {aliSTS2} from "@/api/alists";
export default {
  data() {
    return {}
  },
  filters: {

  },
  methods: {

    testClick() {
      // const url = 'https://sts.aliyuncs.com';
      // console.log(url)
      aliSTS2()

      // axios.get(url).then(
      //     response => {
      //       const result = response.data.items[0];
      //       console.log(result)
      //     }
      // ).catch(
      //     response => {
      //       alert('请求失败');
      //       console.log(response)
      //     },
      // );

    },
  }
}
</script>

<style scoped>

</style>
