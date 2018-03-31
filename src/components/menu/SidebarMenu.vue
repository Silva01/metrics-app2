<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="1" v-on:click="expandirMenu()">
        <i class="el-icon-d-arrow-right"></i>
        <span slot="title">Expandir</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-sort"></i>
          <span slot="title">Métricas</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">Cadastrar</el-menu-item>
          <el-menu-item index="1-2">Listar</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-time"></i>
          <span slot="title">Tempo</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">Cadastrar</el-menu-item>
          <el-menu-item index="1-2">Listar</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script lang="ts">
import * as $ from 'jquery'

export default {
    name:'sidebar-menu',
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      expandirMenu() {
        if (this.isCollapse) {
          document.getElementById('aside-layout').style.width = "208px";
          this.isCollapse = !this.isCollapse;
        }  else {
          document.getElementById('aside-layout').style.width = "6%";
          this.isCollapse = !this.isCollapse;
        }

      }
    }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }

  .el-menu--collapse {
    height: 100%;
  }

  #aside-layout {
    transition: width 0.5s;
  }
</style>
