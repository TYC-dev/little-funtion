<template>
    <div class="flex-box-row">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name: 'flexbox',
        props: {
            gap: {
                type: Number,
                default: 8
            }
        }
    }
</script>

<style lang="less">
.flex-box-row{
    width: 100%;
    display: flex;
    .flex-box-item{
        flex: 1;
        &:first-child{
            margin-left: 0 !important
        }
    }
}
</style>
