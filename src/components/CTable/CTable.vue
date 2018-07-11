<template>
    <table class="c-table">
        <slot></slot>
    </table>
</template>

<script>
    export default{
        name: 'c-table'
    }
</script>

<style lang="less">
    .c-table{
        position: relative;
        width: 100%;
        line-height: 40px;
        text-align: center;
        border-top: 1px solid #e6e6e6;
        border-collapse: collapse;
        td,th{
            border-bottom: 1px solid #e6e6e6;
            border-right: 1px solid #e6e6e6;
            &:last-child{
                border-right: 0;
            }
        }
        th{
            font-weight: 500;
            background-color: #f9f9f9;
        }
    }
</style>

