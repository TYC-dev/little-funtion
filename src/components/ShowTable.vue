<template>
    <div class="show-ctable">
        <h4>默认效果</h4>
        <c-table>
            <thead>
                <tr>
                    <th>11</th>
                    <th>11</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>11</td>
                </tr>
            </tbody>
        </c-table>
        <h4>边框</h4>
        <div style="padding: 0 10px;">
            <c-table style="margin-top: 20px;"
              :bordered="true">
                <thead>
                    <tr>
                        <th>11</th>
                        <th>11</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>11</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>11</td>
                    </tr>
                </tbody>
            </c-table>
        </div>
        <h4>条纹状</h4>
        <c-table :stript="true">
                <thead>
                    <tr>
                        <th>11</th>
                        <th>11</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>11</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>11</td>
                    </tr>
                </tbody>
            </c-table>
        <h4>响应式</h4>
        <c-table :responsive="true">
                <thead>
                    <tr>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                    </tr>
                    <tr>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                        <th>111111111</th>
                    </tr>
                </tbody>
            </c-table>
        <h3>CTable</h3>
        <h5>属性</h5>
        <c-table class="atrribute-table">
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
                    <td>bordered</td>
                    <td><span>Boolean</span></td>
                    <td>false</td>
                    <td>是否有边框</td>
                </tr>
                <tr>
                    <td>stript</td>
                    <td><span>Boolean</span></td>
                    <td>false</td>
                    <td>条纹式表格</td>
                </tr>
                <tr>
                    <td>responsive</td>
                    <td><span>Boolean</span></td>
                    <td>false</td>
                    <td>响应式表格</td>
                </tr>
            </tbody>
        </c-table>
    </div>
</template>

<script>
    import CTable from './CTable/CTable'

    export default{
        name: 'showtable',
        components: {
            CTable
        }
    }
</script>

<style lang="less">
.show-tabble{
    padding: 10px;
    text-align: left;
    p{
        font-size: 16px;
    }
    h3{
        font-size: 26px;
        color: #45adca
    }
}
</style>





