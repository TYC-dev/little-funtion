<template>
  <div id="app">
    <!-- //<process-bar :barColor="'#ff0909'"></process-bar> -->
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
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
  line-height: 1.6;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  text-decoration: none;
  color: #45adca
}
</style>
