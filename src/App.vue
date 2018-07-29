<template>
  <div id="app">
    <cbox style="background-color: RGBA(245, 245, 245, 1)">
      <cheader slot="header"
      :rightType="{showType: 'dot'}"
      @on-click-right="headerRight">
        <span slot="title">sdfad</span>
      </cheader>
      
      <router-view></router-view>
      <cdialog v-model="showMore">
          <div class="dialog-box">
            <div class="img-box">
              <img src="./assets/logo.png" alt="">
            </div>
            <cbutton link="https://github.com/TYC-dev/little-toolkit">Github地址</cbutton>
          </div>
      </cdialog>
    </cbox>
    
  </div>
</template>

<script>
import Cbox from './components/Cbox/Cbox'
import Cheader from './components/Cheader/Cheader'
import Cdialog from './components/CDialog/Cdialog'
import Cbutton from './components/Cbutton/Cbutton'
export default {
  name: 'App',
  components: {
    Cbox,
    Cheader,
    Cdialog,
    Cbutton
  },
  methods: {
    headerRight: function() {
      this.showMore = !this.showMore
    }
  },
  data() {
    return {
      showMore: false
    }
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
.dialog-box{
  padding: 10px;
  .img-box{
    text-align: center;
    img{
      width: 80%;
    }
  }
}
</style>