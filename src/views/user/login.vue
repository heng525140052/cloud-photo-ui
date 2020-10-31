<template>
  <div>
    <v-app-bar
        color="deep-purple accent-4"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>
      <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="What state are you from?"
          solo-inverted
      ></v-autocomplete>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>

    <!-- 登录注册-->
    <v-container class="page-login" fill-height justify="center" align="center">
      <v-row>
        <v-col>
          <v-card class="pa-3 page-login__card"
                  tile
                  max-width="400"
          >
            <v-card-title>
              <h1 class="primary--text display-1 page-login_title">
                CloudPhoto
              </h1>
            </v-card-title>
            <v-card-text>
              <v-form
                  ref="form"
                  class="my-10"
                  lazy-validation
                  v-model="formValid"
              >
                <v-text-field
                    :rules="formRule.username"
                    v-model="formModel.username"
                    name="login"
                    color="purple darken-2"
                    autocomplete="off"
                    label="邮箱.."
                    required
                />
                <v-text-field
                    :rules="formRule.password"
                    v-model="formModel.password"
                    name="login"
                    color="purple darken-2"
                    autocomplete="off"
                    label="密码.."
                    required
                    v-on:keyup.enter="login"
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <!--            <v-tooltip v-for="item in socialIcons" :key="item.text" bottom>-->
              <!--              <template v-slot:activator="{ on, attrs }">-->
              <!--                <v-btn-->
              <!--                    color="primary"-->
              <!--                    icon-->
              <!--                    v-bind="attrs"-->
              <!--                    v-on="on"-->
              <!--                    @click="handleSocialLogin"-->
              <!--                >-->
              <!--                  <v-icon v-text="item.icon"/>-->
              <!--                </v-btn>-->
              <!--              </template>-->
              <!--              <span>{{ item.text }}</span>-->
              <!--            </v-tooltip>-->
              <v-spacer/>
              <v-btn large text @click="login">
                注册
              </v-btn>
              <v-btn large tile color="primary" @click="login" :loading="loading">
                登录
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'PageLogin',
  data() {
    return {
      loading: false,
      formValid: false,
      formModel: {
        username: null,
        password: null
      },
      formRule: {
        username: [
          (v) =>
              !!v || this.$vuetify.lang.t('用户名必填', ['username'])
        ],
        password: [
          (v) =>
              !!v || this.$vuetify.lang.t('密码必填', ['password'])
        ]
      },
      socialIcons: [
        {
          text: 'Google',
          icon: 'mdi-google'
        },
        {
          text: 'Facebook',
          icon: 'mdi-facebook'
        },
        {
          text: 'Twitter',
          icon: 'mdi-twitter'
        }
      ]
    }
  },
  computed: {
    prefix() {
      return ''
    }
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store
            .dispatch('login', this.formModel)
            .then(() => {
              this.loading = false
              this.$router.push('/dashboard')
            })
            .catch(() => {
              this.loading = false
            })
      }
    },
    handleSocialLogin() {
    }
  }
}
</script>

<style lang="sass" scoped>
.page-login
  &__card
  max-width: 600px
  margin: 0 auto
</style>
