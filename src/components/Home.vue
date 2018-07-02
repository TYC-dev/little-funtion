<template>
    <div class="home">
        <box-grid>
            <box-grid-item>
                <router-link to="/tab">Tab</router-link>
            </box-grid-item>
            <box-grid-item>
                <router-link to="/process-bar">Process-bar</router-link>
            </box-grid-item>
            <box-grid-item>
                <router-link to="/flexbox">Flexbox</router-link>
            </box-grid-item>
        </box-grid>
        <box-grid>
            <box-grid-item>
                <router-link to="/boxgrid">Boxgrid</router-link>
            </box-grid-item>
            <box-grid-item></box-grid-item>
            <box-grid-item></box-grid-item>
        </box-grid>
    </div>
</template>

<script>
    import BoxGrid from './boxgrid/BoxGrid'
    import BoxGridItem from './boxgrid/BoxGridItem'
    export default{
        name: 'home',
        components: {
            BoxGrid,
            BoxGridItem
        }
    }
</script>
