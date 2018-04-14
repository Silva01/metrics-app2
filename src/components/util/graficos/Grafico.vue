<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
      <el-button type="danger" style="float: right" icon="el-icon-setting" v-on:click="filtro()" circle></el-button>
    </div>
    <div>
      <canvas v-bind:id="id" v-bind:width="width" v-bind:height="height"></canvas>
    </div>
  </el-card>
</template>

<script lang="ts">
  import CardGraphic from "./card-graphic";
  import * as Chart from 'chart.js';

  export default {
    name: 'grafico',
    props: [
      'type',
      'indicadores',
      'title',
      'id',
      'width',
      'height'
    ],
    mounted: function () {
        let serie = new CardGraphic();
        let graphic = document.getElementById(this.id);
        new Chart(graphic, serie.getSeries());
    },
    methods: {
        filtro: function() {
            alert('teste');
        }
    }
  }
</script>

<style></style>
