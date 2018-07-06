<template>
    <div class="show-header-box">
        <cheader><span slot="title">Title as slot</span></cheader>
        <cheader style="top: 66px"
          :title="'Title as props'"></cheader>
        <cheader style="top: 130px"
          :rightType="{showRight: false}"><span slot="title">header without right</span></cheader>
        <cheader style="top: 194px"
          :rightType="{showType: 'dot'}"><span slot="title">dot right</span></cheader>
        <cheader style="top: 258px">
            <span slot="title">custom right</span>
            <span slot="right">选项</span>
        </cheader>
        <cheader style="top: 322px"
          :leftType="{showLeftText: false}"><span slot="title">left back without text</span></cheader>
        <cheader style="top: 386px"
          :leftType="{showLeft: false}"><span slot="title">no left back</span></cheader>
    </div>
</template>

<script>
    import Cheader from './Cheader/Cheader' 
    export default{
        name: 'showcheader',
        components: {
            Cheader
        }
    }
</script>

<style lang="less">

</style>
