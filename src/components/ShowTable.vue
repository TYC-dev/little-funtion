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




