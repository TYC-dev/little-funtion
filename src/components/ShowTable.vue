<template>
    <div class="show-ctable">
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
        <div style="padding: 0 10px;">
            <c-table style="margin-top: 20px;">
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




