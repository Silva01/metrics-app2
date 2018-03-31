<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ label }}</span>
    </div>
    <div>
      {{ valor }} {{ tipo }}
    </div>
  </el-card>
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

<style>
  .text {
    font-size: 14px;
  }

    .item {
      margin-bottom: 18px;
  }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
  }
    .clearfix:after {
      clear: both
  }

    .box-card {
      width: 100%;
  }
</style>

