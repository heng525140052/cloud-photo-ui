<template>
  <v-hover
      v-slot="{ hover }"
  >
    <v-card
        class="mx-auto hover"
        :max-width="card.maxWidth"
        :elevation="hover ? 16 : 2"
        :class="{ 'on-hover': hover }"
    >
      <v-img
          :src="drive.url"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
      >
      </v-img>
      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
        {{ drive.name }}
      </v-card-actions>

    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    drive: {
      type: Object,
      required: true
    },
    channel: {
      type: Object,
      required: true
    },
    card: Object
  }
}
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
