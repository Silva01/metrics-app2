<template>
    <div>        
        <sidebar-menu></sidebar-menu>        
        <router-view></router-view>
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
