<template>
  <div class="topnav">
    <a href="javascript:void()" class="logout-btn">Logout</a>
  </div>
</template>

<script lang="ts">
  export default {
      name: 'nav-bar-metrics'
  }
</script>

<style>
  .topnav {
    overflow: hidden;
    display: block;
    background-color: #151718;
  }

  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: #151718;
  }

  .topnav a.active {
    background-color: #4CAF50;
    color: white;
  }

  .logout-btn {
    margin-left: 90%;
  }
</style>
