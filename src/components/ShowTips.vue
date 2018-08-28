<template>
    <div class="show-tips-box">
        <cbutton @click.native="changeShow3">default</cbutton>
        <cbutton @click.native="changeShow1">顶部</cbutton>
        <cbutton @click.native="changeShow2">底部</cbutton>
        <tips v-model="show3"><span>tips default</span></tips>
        <tips v-model="show1" direction="top"><span>tips top</span></tips>
        <tips v-model="show2" direction="bottom"><span>tips bottom</span></tips>
        <c-table class="atrribute-table"
                  style="margin-top: 40px"
                  :responsive="true"
                  :bordered="true">  
                  <thead>
                      <tr>
                          <th>属性名</th>
                          <th>类型</th>
                          <th>默认值</th>
                          <th>说明</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>text</td>
                          <td><span>String</span></td>
                          <td></td>
                          <td>tip的内容</td>
                      </tr>
                      <tr>
                          <td>showTime</td>
                          <td><span>Number</span></td>
                          <td>2000</td>
                          <td>显示时长，单位毫秒</td>
                      </tr>
                      <tr>
                          <td>direction</td>
                          <td><span>String</span></td>
                          <td>default</td>
                          <td>由哪里弹出，默认底部渐变显示，可选top上方，bottom下方</td>
                      </tr>
                  </tbody>
              </c-table>
        <h3><a href="https://github.com/TYC-dev/little-toolkit/blob/master/src/components/tips/Tips.vue">组件源码</a></h3>
        <h3><a href="https://github.com/TYC-dev/little-toolkit/blob/master/src/components/ShowTips.vue">demo源码</a></h3>
    </div>
</template>

<script>
    import Tips from './tips/Tips'
    import Cbutton from './Cbutton/Cbutton'
    import CTable from './CTable/CTable'

    export default{
        name: 'showtips',
        components: {
            Tips,
            Cbutton,
            CTable
        },
        methods: {
            changeShow1() {
                this.show1 = true
            },
            changeShow2() {
                this.show2 = true
            },
            changeShow3() {
                this.show3 = true
            }
        },
        data() {
            return {
                show1: false,
                show2: false,
                show3: false
            }
        }
    }
</script>

<style>
.show-tips-box{
    margin: 10px;
}
</style>

