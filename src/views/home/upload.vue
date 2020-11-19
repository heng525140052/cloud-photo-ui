<template>

  <div class="text-center">

    <v-file-input
        counter
        hide-input
        multiple
        show-size
        small-chips
        accept="image/*"
        label="File input"
        truncate-length="15"
        @change="UploadFile"
    >
    </v-file-input>
    <v-spacer></v-spacer>

    <v-card
        class="mx-auto upload-file-list"
        max-width="500"
        flat
        none="true"
        display="none"
        v-show="uploadFileListState"
    >
      <v-toolbar
          color="pink"
          dark
      >

        <v-toolbar-title>上传文件列表</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="uploadFileListFileState = !uploadFileListFileState">

          <v-icon v-if="uploadFileListFileState === true">mdi-chevron-down</v-icon>
          <v-icon v-else>mdi-chevron-up</v-icon>

        </v-btn>
        <v-btn icon @click="uploadFileListState = true">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list
          subheader
          two-line
      >

        <v-list-item
            v-for="item in upload_file_list"
            :key="item.title"
            v-show="uploadFileListFileState"
        >
          <v-list-item-avatar>
            <v-icon large color="green darken-2">{{ item.file_icon }}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>

      </v-list>
    </v-card>


  </div>

</template>

<script>

import AliOssController from "@/api/alioss";
import util from "@/libs/util";

export default {
  data() {
    return {
      name: "upload",
      card_title: "正在上传",
      upload_file_dialog: false,
      uploadState: false,
      upload_file_list: [],
      responseType: 'success',
      fileType: 'image/*',
      fileSize: '5242880',
      uploadFileListState: false,
      uploadFileListFileState: false,
    }

  },
  components: {},
  methods: {

    UploadFile(files_data) {

      files_data.forEach((item) => {

        if (item.size >= this.fileSize) {
          this.alert(true, `File is too big. ${item.size} Bytes`)
        } else {
          const fr = new FileReader()
          fr.readAsDataURL(item)
          fr.addEventListener('load', () => {
            let item_name = item['name']
            let item_extension = item_name.substr(item_name.indexOf('.') + 1)
            let file_icon = '';

            let filetype = util.matchType(item.type)

            if (filetype === 'image') {
              file_icon = 'mdi-image'
            } else if (filetype === 'video') {
              file_icon = 'mdi-file-video'
            } else if (filetype === 'audio') {
              file_icon = 'mdi-book-music'
            } else if (filetype === 'other') {
              file_icon = 'mdi-file'
            }

            let file_item = {
              name: item_name,
              extension: item_extension,
              upload_status: false,
              url: fr.result,
              file_icon: file_icon,
              file: item
            }
            this.upload_file_list.push(file_item)

            AliOssController.put(file_item).then(data => {
              console.log(data);
            });

          })
        }
      })
    },


  }
}
</script>

<style scoped>

.upload-file-list {
  /*padding-left: 10px;*/
}


</style>
