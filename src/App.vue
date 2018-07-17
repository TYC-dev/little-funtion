<template>
  <div id="app">
    <cbox style="background-color: #fff">
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

<style lang="less">
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

.atrribute-table{
  tbody{
    tr{
      td:first-child{
        color: #45adca;
      }
      td:nth-child(2){
        color: #fff;
        span{
          padding: 3px 5px;
          border-radius: 2px;
          background-color: #45adca;
        }
      }
    }
  }
}
</style>
