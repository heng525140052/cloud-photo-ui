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
        @change="onFilePicked"
    ></v-file-input>
    <v-spacer></v-spacer>


    <v-card
        class="mx-auto"
        max-width="500"
    >
      <v-toolbar
          color="pink"
          dark
      >

        <v-toolbar-title>Inbox</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list two-line>
        <v-list-item-group
            v-model="selectedFile"
            active-class="pink--text"
            multiple
        >
          <template v-for="(item, index) in upload_file_list">
            <v-list-item :key="item.title">
              <template>

                <v-list-tile-avatar>
                  <v-icon large color="green darken-2">{{ item.icon }}</v-icon>
                </v-list-tile-avatar>

                <v-list-item-content>

                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text v-text="item.extension"></v-list-item-action-text>

                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider
                v-if="index < upload_file_list.length - 1"
                :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-btn
        depressed
        color="primary"
        @click="uploadFile"
    >
      Primary
    </v-btn>


  </div>

</template>

<script>

import AliOssController from "@/api/alioss";

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
      selectedFile: []
    }

  },
  components: {},
  methods: {

    onFilePicked(files_data) {
      console.log('files_data')
      console.log(files_data)
      console.log('files_data')
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
            if (item.type === 'image/*') {
              file_icon = 'mdi-image'
            } else if (item === 'video/*') {
              file_icon = 'mdi-file-video'
            } else if (item === 'audio/*') {
              file_icon = 'mdi-book-music'
            }

            this.upload_file_list.push({
              name: item_name,
              extension: item_extension,
              upload_status: false,
              url: fr.result,
              icon: file_icon,
              file: item
            })

          })
        }
      })
    },
    uploadFile() {
      const params = this.upload_file_list[0];

      console.log(params)

      AliOssController.put(params).then(data => {
        console.log(data);
      });
    }

  }
}
</script>

<style scoped>

</style>
