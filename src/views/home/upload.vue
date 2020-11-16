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
          {{ card_title }}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
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

      files_data.forEach((item) => {

        if (item.size >= this.fileSize) {
          this.alert(true, `File is too big. ${item.size} Bytes`)
        } else {
          const fr = new FileReader()
          fr.readAsDataURL(item)
          fr.addEventListener('load', () => {
            let item_name = item['name']
            let item_extension = item_name.substr(item_name.indexOf('.') + 1)
            this.upload_file_list.push({
              name: item_name,
              extension: item_extension,
              upload_status: false,
              url: fr.result,
              file: fr
            })

          })
        }
      })
      console.log("this.upload_file_list")
      console.log(this.upload_file_list)
      console.log("this.upload_file_list")
    },
    uploadFile() {

    }

  }
}
</script>

<style scoped>

</style>
