<template>
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
</template>

<script>

import Card from '../util/card/Card'

export default {
    name: 'home-component',
    components: {
        Card
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
        }
    }
}
</script>

<style>    
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        margin: 0px 2% 3% 12%;
    }
    .grid-item {
        font-size: 30px;
        text-align: center;
    }
</style>
