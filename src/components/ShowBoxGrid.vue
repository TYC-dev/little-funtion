<template>
    <div class="show-box-grid">
        <box-grid>
            <box-grid-row>
               <box-grid-item>
                   <span slot="label">no icon</span>
                </box-grid-item>
                <box-grid-item>
                    <span slot="label">no icon</span>
                </box-grid-item>
                <box-grid-item>
                    <span slot="label">no icon</span>
                </box-grid-item> 
            </box-grid-row>
            <box-grid-row>
                <box-grid-item>
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">have icon</span>
                </box-grid-item>
                <box-grid-item link="/">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">router link</span>
                </box-grid-item>
                <box-grid-item link="https://wwww.baidu.com">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">outer link</span>
                </box-grid-item>
            </box-grid-row>
        </box-grid>
        <div class="show-box-grid-des">
            <p>
                <a href="https://github.com/TYC-dev/little-toolkit/tree/master/src/components/boxgrid">组件代码</a>
            </p>
        </div>
    </div>
</template>

<script>
    import BoxGrid from './boxgrid/BoxGrid'
    import BoxGridRow from './boxgrid/BoxGridRow'
    import BoxGridItem from './boxgrid/BoxGridItem'

    export default{
        name: 'showboxgrid',
        components: {
            BoxGrid,
            BoxGridRow,
            BoxGridItem
        }
    }
</script>

<style lang="less">
.show-box-grid{
    padding: 10px 0;
    .show-box-grid-des{
        margin-top: 10px;
        p {
            font-size: 20px;
        }
    }
}
</style>

