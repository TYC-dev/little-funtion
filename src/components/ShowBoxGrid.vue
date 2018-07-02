<template>
    <div class="show-box-grid">
        <box-grid>
            <box-grid-item>
                lskj
            </box-grid-item>
            <box-grid-item>
                lskj
            </box-grid-item>
            <box-grid-item>
                lskj
            </box-grid-item>
        </box-grid>
    </div>
</template>

<script>
    import BoxGrid from './boxgrid/BoxGrid'
    import BoxGridItem from './boxgrid/BoxGridItem'

    export default{
        name: 'showboxgrid',
        components: {
            BoxGrid,
            BoxGridItem
        }
    }
</script>
