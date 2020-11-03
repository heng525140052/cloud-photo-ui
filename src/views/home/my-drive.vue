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
import {UserRegist} from "@/api/product";
// import util from '@/libs/util.js'

export default {
  data() {
    return {}
  },
  filters: {},
  methods: {

    testClick() {
      console.log(1231354565)

      const formData = {
        nickName: "nickName",
      };
      // 调接口请求
      UserRegist(formData).then(res => {
        console.log(res)
      })
    },
  }
}
</script>

<style scoped>

</style>
