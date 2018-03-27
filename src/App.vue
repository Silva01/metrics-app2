<template>
  <div id="app">
    <layout-auth v-if="isAuth"></layout-auth>
    <layout v-else></layout>
  </div>
</template>

<script lang="ts">

import LayoutAuth from './components/LayoutAuth.vue'
import Layout from './components/Layout.vue'
import * as $ from 'jquery'

export default {
  name: 'App',
  components: {
    LayoutAuth,
    Layout
  },
  computed: {
    isAuth() {
      if (this.$route.path.match('/login')) {
        $('body').css('background-color', '#3cc9c9');
      } else {
        $('body').css('background-color', 'white');
      }

      return this.$route.path.match('/login')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
