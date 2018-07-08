<template>
    <div class="c-box">
        <slot name="header"></slot>
        <div class="c-box-content"
          :style="contentStyle">
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default{
        name: 'c-box',
        props: {
            paddingTop: Number,
            paddingButtom: Number
        },
        computed: {
            contentStyle() {
                const styles = {
                    paddingTop: '0px',
                    paddingBottom: '0px'
                }
                if(this.$slots.header){
                    styles.paddingTop = '44px'
                }
                if(this.$slots.footer){
                    styles.paddingBottom = '44px'
                }
                return styles
            }
        }
    }
</script>

<style lang="less">
    .c-box{
        position: relative;
        height: 100%;
        &-content{
            position: relative;
            height: 100%;
            box-sizing: border-box;
            overflow: auto;
        }
    }
</style>
