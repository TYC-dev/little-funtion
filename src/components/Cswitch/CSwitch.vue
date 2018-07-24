<template>
    <div class="c-switch"
      :class="{'c-switch-on': currentShow}"
      @click="onClick">
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
        }
    }
</script>

<style lang="less">
    .borderRadius{
        border-radius: 4px;
    }
    .c-switch{
        position: relative;
        height: 25px;
        width: 55px;
        background-color: #d4d4d4;
        transition: background-color 0.3s;
        .borderRadius;
        &-on{
            background-color: #45adca;
        }
        &-bar{
            position: absolute;
            left: 0;
            top: -3px;
            width: 20px;
            height: 31px;
            background-color: #fff;
            border: 1px solid #c3c3c3;
            box-sizing: border-box;
            transition: left 0.3s;
            .borderRadius;
        }
        &-bar-on{
            left: 35px;
            border-color: #45adca;
        }
    }
</style>
