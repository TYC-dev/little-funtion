<template>
  <div id="app">
    <cbox>
      <cheader slot="header"><span slot="title">sdfad</span></cheader>
      <!-- <img src="./assets/logo.png"> -->
      <router-view></router-view>
    </cbox>
    
  </div>
</template>

<script>
import Cbox from './components/Cbox/Cbox'
import Cheader from './components/Cheader/Cheader'
export default {
  name: 'App',
  components: {
    Cbox,
    Cheader
  }
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
  height: 100%;
}
a{
  text-decoration: none;
  color: #45adca
}
</style>
