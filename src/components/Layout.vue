<template>
    <el-container>
      <el-header id="header-nav">
        <nav-bar-metric></nav-bar-metric>
      </el-header>
      <el-container>
        <el-aside id="aside-layout" width="6%">
          <sidebar-menu></sidebar-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script lang="ts">

import SidebarMenu from './menu/SidebarMenu'
import NavBarMetric from './util/nav-bar/NavBarMetric'

export default {
    name: 'layout',
    components: {
        SidebarMenu,
        NavBarMetric
    }
}
</script>

<style>
#header-nav {
  padding: 0;
}

</style>
