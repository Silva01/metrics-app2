<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
    </div>
    <div>

    </div>
  </el-card>
</template>

<script lang="ts">
  export default {
    name: 'card-graphic',
    props: ['type', 'indicadores', 'title']
  }
</script>

<style></style>
