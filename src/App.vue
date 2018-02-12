<template>
  <div id="app">
    <layout-auth v-if="isAuth"></layout-auth>
    <layout v-else></layout>
  </div>
</template>

<script>

import LayoutAuth from './components/LayoutAuth'
import Layout from './components/Layout'

export default {
  name: 'App',
  components: {
    LayoutAuth,
    Layout    
  },
  computed: {
    isAuth() {
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
  margin-top: 60px;
}
</style>
