<template>
    <div class="show-tab-block">
        <h3>Tab</h3>
        <h5>属性</h5>
        <c-table :responsive="true"
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
                    <td>animate</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>是否设置切换动画</td>
                </tr>
            </tbody>
        </c-table>
        <h5>插槽</h5>
        <c-table :responsive="true"
          :bordered="true">  
            <thead>
                <tr>
                    <th>名字</th>
                    <th>说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>默认</td>
                    <td>用来放tabitem的插槽</td>
                </tr>
            </tbody>
        </c-table>
        <h3>TabItem</h3>
        <h5>属性</h5>
        <c-table :responsive="true"
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
                    <td>active</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>当前选中</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>boolean</td>
                    <td></td>
                    <td>是否不可选</td>
                </tr>
            </tbody>
        </c-table>
        <h5>插槽</h5>
        <c-table :responsive="true"
          :bordered="true">  
            <thead>
                <tr>
                    <th>名字</th>
                    <th>说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>默认</td>
                    <td>用来放tabitem的文字内容</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>用来放tabitem的图标</td>
                </tr>
            </tbody>
        </c-table>       
    </div>
</template>

<script>
    import CTable from './CTable/CTable'
    export default{
        name: 'tab-block2',
        components: {
            CTable
        }
    }
</script>
