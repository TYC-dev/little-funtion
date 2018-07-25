<template>
    <div class="c-group">
        <div class="c-group-cells">
          <slot></slot>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'c-group',
}
</script>

<style lang="less">
    .c-group{
        position: relative;
        background-color: #fff;
        margin-top: 10px;
    }
</style>
