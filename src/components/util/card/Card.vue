<template>
    <div class="card card--oil">
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
    name:'card',
    props: [
        "valor",
        "label",
        "tipo"
    ]
}
</script>

<style lang="sass">
    @import './card.scss'
</style>

