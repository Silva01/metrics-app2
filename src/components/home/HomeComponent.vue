<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <card :valor="quantQuestoes" :label="label1" :tipo="tipoQuant"></card>
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
        <grafico
          :id="'789'"
          :width="'200px'"
          :height="'59px'"
          :title="'Grafico Mensal'">
        </grafico>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">

import Card from '../util/card/Card'
import Grafico from '../util/graficos/Grafico'
import Metricas from '../../assets/classes/metricas';
import Utils from '../../assets/classes/utils';
import Notification from '../../assets/classes/Notificacao'

export default {
    name: 'home-component',
    components: {
      Card,
      Grafico
    },
    data(){
        return {
          quantQuestoes: 0,
          porcentAcertos: 0,
          pontosMes: 0,
          label1: "Quantidade de Acertos",
          label2: "Porcentagem de Acertos",
          label3: "Pontos no Mês",
          tipoPorcent: "%",
          tipoQuant: "",
          tipoPontos: "Pontos",
          idCard: 'card-1'
        }
    },
    mounted: function() {
      let metricas = new Metricas();
      let defaultDateBegin = new Date();
      defaultDateBegin.setMonth(0);
      defaultDateBegin.setDate(1);


      let defaultDateEnd = new Date();
      defaultDateEnd.setMonth(11);
      defaultDateEnd.setDate(31);

      metricas.countingSuccessQuestions(
        {
          auth: sessionStorage.getItem('token'),
          params: {
            banca: 'all',
            date_begin: Utils.convertDateToString(defaultDateBegin),
            date_end: Utils.convertDateToString(defaultDateEnd)
          }
        }
      )
        .then(s => s.json())
        .then(data => this.quantQuestoes = data.result)
        .catch(e => Notification.error(e.message, 'Error'));

      metricas.porcentSuccessQuestions(
        {
          auth: sessionStorage.getItem('token'),
          params: {
            banca: 'all',
            date_begin: Utils.convertDateToString(defaultDateBegin),
            date_end: Utils.convertDateToString(defaultDateEnd)
          }
        }
      )
        .then(s => s.json())
        .then(data => this.porcentAcertos = data.result)
        .catch(e => Notification.error(e.message, 'Error'));
    }
}
</script>

<style>
  .graphic-row {
    margin-top: 1.5%;
  }
</style>
