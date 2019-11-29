<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import vue from "vue"
  import Component from "vue-class-component"


  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 14px;
  }
</style>
