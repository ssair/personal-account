<template>
  <div id="app">

    <p id="header">Vue.js 3, vue-cli, vue-router, vuex</p>
    <hr>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
}

</script>

<style>

@import './css/reset.module.css';

:root {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'IBM Plex Sans', sans-serif;
}

#app {
  text-align: center;
  color: #333;
}

#header {
  padding-top: 2rem;
  font-size: 2rem;
}

</style>