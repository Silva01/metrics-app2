<template>
  <div v-bind:id="id" class="card2 card--oil">
    <div class="card__count-container">
      <div class="card__count-text">
        <span class="card__count-text--big">{{ valor }}</span> {{ tipo }}
      </div>
    </div>
    <div class="card__stuff-container">
      <div class="card__stuff-text">{{ label }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'grafico',
    props: ['valor', 'tipo', 'label', 'id']
  }
</script>

<style lang="sass">
  @import "grafico"
</style>
