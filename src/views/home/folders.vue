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
            v-for="(drive) in file_list"
            :key="drive"
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
                    :src="drive"
                    :key="drive"
                    @click="show"
                    height="200px"
                ></v-img>
              </div>

            </v-card>

          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import AliOssController from "@/api/alioss";

export default {
  data() {
    return {
      loading: true,
      file_list: [
        "http://golong-cloud.oss-cn-beijing.aliyuncs.com/image/%E7%AC%94%E8%AE%B0%E6%9C%AC/006iD5XFly1g13k84qqfhj30g40g4ac5.jpg",
        "http://golong-cloud.oss-cn-beijing.aliyuncs.com/image/%E7%AC%94%E8%AE%B0%E6%9C%AC/047f12f34da840541de85ba316ea2a8.png",
      ]
      // file_list: [
      //   {
      //     url: "http://golong-cloud.oss-cn-beijing.aliyuncs.com/image/%E7%AC%94%E8%AE%B0%E6%9C%AC/006iD5XFly1g13k84qqfhj30g40g4ac5.jpg"
      //   },
      //   {
      //     url: "http://golong-cloud.oss-cn-beijing.aliyuncs.com/image/%E7%AC%94%E8%AE%B0%E6%9C%AC/047f12f34da840541de85ba316ea2a8.png"
      //   }
      // ]

    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)

    this.fileList()
  },
  methods: {
    fileList() {

      // const params = {
      //   prefix: "",
      //   marker: "",
      //   max_keys: 20,
      // }

      // AliOssController.ObjectList(params).then(data => {
      //   this.file_list = data.objects
      //   console.log("this.file_list")
      //   console.log(this.file_list)
      //   console.log("this.file_list")
      // });
    },

    show() {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    }

  }
}
</script>
