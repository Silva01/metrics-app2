<template>
  <div>
    <div class="grid-container">
      <div class="grid-item">
        <card :valor="quantQuestoes" :label="label1" :tipo="tipoPorcent"></card>
      </div>
      <div class="grid-item">
        <card :valor="porcentAcertos" :label="label2" :tipo="tipoPorcent"></card>
      </div>
      <div class="grid-item">
        <card :valor="pontosMes" :label="label3" :tipo="tipoPontos"></card>
      </div>
    </div>
    <div class="grid-container">
      <grafico :id="idCard" :valor="pontosMes" :label="label3" :tipo="tipoPontos"></grafico>
    </div>
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
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        margin: 0px 0% 2% 0%;
    }
    .grid-item {
        font-size: 30px;
        text-align: center;
    }
</style>
