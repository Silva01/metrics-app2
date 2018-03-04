<template>
    <div class="container">
        <div>
            <sidebar-menu></sidebar-menu>
        </div>
        <div id="container-page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import SidebarMenu from './menu/SidebarMenu'

export default {
    name: 'layout',
    components: {
        SidebarMenu
    }
}
</script>

<style>

</style>
