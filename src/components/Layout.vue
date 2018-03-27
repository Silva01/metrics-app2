<template>
    <div>
      <nav-bar-metric></nav-bar-metric>

      <div class="grid-container">
        <div class="item2">
          <sidebar-menu></sidebar-menu>
        </div>
        <div class="item3">
          <router-view></router-view>
        </div>
      </div>
    </div>
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
  .item1 { grid-area: header; }
  .item2 {
    grid-area: menu;
    width: 5%;
  }
  .item3 {
    grid-area: main;
  }

  .grid-container {
    display: grid;
    grid-gap: 10px;
  }

</style>
