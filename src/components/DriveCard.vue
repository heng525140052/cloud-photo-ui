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
            <div class="images" v-viewer="{movable: false}">

                <v-img
                        :src="drive.url"
                        class="white--text align-end image"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"

                        @click="show"
                >
                </v-img>
            </div>

            <v-card-actions>
                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
                <span style="width:150px;overflow:hidden; white-space:nowrap; text-overflow:ellipsis">
                  {{ drive.name }}
                </span>
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
        },
        methods: {
            show() {
                console.log('121213212312132123')
                const viewer = this.$el.querySelector('.images').$viewer
                viewer.show()
            }

        }

    }
</script>

<style lang="sass" scoped>
    .v-card.on-hover.theme--dark
        background-color: rgba(#FFF, 0.8)

        > .v-card__text
            color: #000

</style>


