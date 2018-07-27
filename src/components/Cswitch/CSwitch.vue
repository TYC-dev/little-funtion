<template>
    <div class="c-switch"
    @click="onClick">
        <div class="c-switch-wrap"
        :class="{'c-switch-on': currentShow}"></div>
        <div class="c-switch-bar"
        :class="{'c-switch-bar-on': currentShow}"></div>
    </div>
</template>

<script>
    export default{
        name: 'cswitch',
        props: {
            value: Boolean
        },
        methods: {
            onClick() {
                this.currentShow = !this.currentShow
                this.$emit('input',this.currentShow)
            }
        },
        data() {
            return{
                currentShow: this.value ? this.value : false
            }
        },
        watch: {
            value( val ) {
                this.currentShow = val
            }
        }
    }
</script>

<style lang="less">
    .borderRadius{
        border-radius: 4px;
    }
    .c-switch{
        display: flex;
        align-items: center;
        position: relative;
        height: 30px;
        width: 55px;
        .borderRadius;
        &-wrap{
            height: 16px;
            width: 100%;
            background-color: #d4d4d4;
            transition: background-color 0.3s;
            border-radius: 16px;
        }
        &-on{
            background-color: #45adca;
        }
        &-bar{
            position: absolute;
            left: 0;
            top: 0;
            width: 30px;
            height: 30px;
            background-color: #fff;
            border: 1px solid #c3c3c3;
            box-sizing: border-box;
            transition: left 0.3s;
            border-radius: 50%;
        }
        &-bar-on{
            left: 25px;
            border-color: #45adca;
        }
    }
</style>
