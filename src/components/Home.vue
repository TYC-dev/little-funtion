<template>
    <div class="home">
        <box-grid>
            <box-grid-row>
               <box-grid-item>
                    <router-link to="/tab">Tab</router-link>
                </box-grid-item>
                <box-grid-item>
                    <router-link to="/process-bar">Process-bar</router-link>
                </box-grid-item>
                <box-grid-item>
                    <router-link to="/flexbox">Flexbox</router-link>
                </box-grid-item> 
            </box-grid-row>
            <box-grid-row>
                <box-grid-item>
                    <router-link to="/boxgrid">Boxgrid</router-link>
                </box-grid-item>
                <box-grid-item></box-grid-item>
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
