<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <card :valor="quantQuestoes" :label="label1" :tipo="tipoPorcent"></card>
      </el-col>
      <el-col :span="8">
        <card :valor="porcentAcertos" :label="label2" :tipo="tipoPorcent"></card>
      </el-col>
      <el-col :span="8">
        <card :valor="pontosMes" :label="label3" :tipo="tipoPontos"></card>
      </el-col>
    </el-row>
    <el-row class="graphic-row">
      <el-col :span="24">
        <card :valor="pontosMes" :label="label3" :tipo="tipoPontos"></card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">

import Card from '../util/card/Card'
import Grafico from '../util/graficos/Grafico'

export default {
    name: 'home-component',
    components: {
      Card,
      Grafico
    },
    data(){
        return {
          quantQuestoes: 10,
          porcentAcertos: 80,
          pontosMes: 200,
          label1: "Quantidade de Acertos",
          label2: "Porcentagem de Acertos",
          label3: "Pontos no Mês",
          tipoPorcent: "%",
          tipoPontos: "Pontos",
          idCard: 'card-1'
        }
    }
}
</script>

<style>
  .graphic-row {
    margin-top: 1.5%;
  }
</style>
