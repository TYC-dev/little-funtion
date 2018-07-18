<template>
    <div class="show-button-des">
        <cbutton>默认</cbutton>
        <cbutton type="normal">一般</cbutton>
        <cbutton type="warn">警告</cbutton>
        <cbutton :disabled="true">禁用</cbutton>
        <cbutton link="/">路由跳转</cbutton>
        <cbutton link="https://www.baidu.com">外部链接</cbutton>
        <cbutton :gradient="true">渐变 默认</cbutton>
        <cbutton type="warn" :gradient="true">渐变 警告</cbutton>
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
                          <td>按钮的文字内容</td>
                      </tr>
                      <tr>
                          <td>type</td>
                          <td><span>String</span></td>
                          <td>default</td>
                          <td>按钮的类型，可选normal一般，warn警告</td>
                      </tr>
                      <tr>
                          <td>disabled</td>
                          <td><span>Boolean</span></td>
                          <td>false</td>
                          <td>按钮是否不可用，默认可用</td>
                      </tr>
                      <tr>
                          <td>gradient</td>
                          <td><span>Boolean</span></td>
                          <td>false</td>
                          <td>按钮是否渐变，默认不渐变</td>
                      </tr>
                      <tr>
                          <td>link</td>
                          <td><span>String</span></td>
                          <td></td>
                          <td>按钮链接</td>
                      </tr>
                  </tbody>
              </c-table>
              <h3><a href="https://github.com/TYC-dev/little-toolkit/blob/master/src/components/Cbutton/Cbutton.vue">组件源码</a></h3>
    </div>
</template>

<script>
    import Cbutton from './Cbutton/Cbutton'
    import CTable from './CTable/CTable'

    export default{
        name: 'showCbutton',
        components: {
            Cbutton,
            CTable
        },
        methods: {
            btnClick() {
                console.log('click')
            }
        }
    }
</script>

<style>
    .show-button-des{
        margin: 10px;
    }
</style>
