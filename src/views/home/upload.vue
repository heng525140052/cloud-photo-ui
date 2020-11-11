<template>

  <div class="text-center">
    <v-file-input
        counter
        hide-input
        multiple
        show-size
        small-chips
        truncate-length="15"
        target="_blank"
        @change="onFilePicked"
    ></v-file-input>
    上傳文件
    <v-dialog
        v-model="upload_file_dialog"
        hide-overlay
        persistent
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="red lighten-2"
            v-bind="attrs"
            v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey darken-4 lighten-2">
          {{card_title}}
          <v-spacer></v-spacer>

          <v-btn
              color="primary"
              text
              @click="upload_file_dialog = false"
          >
            I accept
          </v-btn>
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>
  </div>

</template>

<script>

export default {
  data() {
    return {
      name: "upload",
      card_title:"正在上传",
      upload_file_dialog : false,
      files: [],
      error: {
        state: false,
        msg: ''
      },
      responseType: 'success',
      fileType: 'image/*',
      fileSize: '524288'
    }

  },
  components: {
  },
  methods:{

    onFilePicked(e){
      const selectedFiles = e.target.files

      console.log(selectedFiles)
    }
  }
}
</script>

<style scoped>

</style>