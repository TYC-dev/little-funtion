<template>
    <div class="home">
        <box-grid>
            <box-grid-row>
               <box-grid-item link="/tab">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">Tab</span>
                </box-grid-item>
                <box-grid-item link="/process-bar">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">ProcessBar</span>
                </box-grid-item>
                <box-grid-item link="/flexbox">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">Flexbox</span>
                </box-grid-item> 
            </box-grid-row>
            <box-grid-row>
                <box-grid-item link="/boxgrid">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">Boxgrid</span>
                </box-grid-item>
                <box-grid-item link="/header">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">Header</span>
                </box-grid-item>
                <box-grid-item link="/table">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">Ctable</span>
                </box-grid-item>
            </box-grid-row>
            <box-grid-row>
                <box-grid-item link="/tips">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">Tips</span>
                </box-grid-item>
                <box-grid-item link="/button">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">Button</span>
                </box-grid-item>
                <box-grid-item link="/group">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">group&amp;cell</span>
                </box-grid-item>
            </box-grid-row>
            <box-grid-row>
                <box-grid-item link="/switch">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">switch</span>
                </box-grid-item>
                <box-grid-item link="/dialog">
                    <img slot="icon" src="../assets/icon/createtask.png" alt="">
                    <span slot="label">dialog</span>
                </box-grid-item>
                <box-grid-item></box-grid-item>
            </box-grid-row>
        </box-grid>
    </div>
</template>

<script>
    import BoxGrid from './boxgrid/BoxGrid'
    import BoxGridRow from './boxgrid/BoxGridRow'
    import BoxGridItem from './boxgrid/BoxGridItem'

    export default{
        name: 'home',
        components: {
            BoxGrid,
            BoxGridRow,
            BoxGridItem
        }
    }
</script>
