<template>
    <div class="c-header">
        <div class="c-header-left"
          @click="clickLeft"
          v-show="_leftType.showLeft">
            <div class="left-arrow"></div>
            <div class="left-text"
              v-show="_leftType.showLeftText">返回</div>
        </div>
        <h1 class="c-header-title">
            <slot name="title">
                <span v-if="title">{{title}}</span>
            </slot>
        </h1>
        <div class="c-header-right"
          v-show="_rightType.showRight">
            <slot name="right">
                <div class="right-more-text"
                v-show="rightShow">更多</div>
                <div class="right-more-dot"
                v-show="!rightShow">·</div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'cheader',
        props: {
            title: String,
            headerBgColor: String,
            rightType: {
                type: Object,
                default() {
                    return{
                        showRight: true,
                        showType: 'text'
                    }  
                }
            },
            leftType: {
                type: Object,
                default() {
                    return{
                        showLeft: true,
                        showLeftText: true
                    }
                }
            }
        },
        // mounted:function(){
        //     const asdf = this.leftType
        //     console.log(asdf)
        // },
        methods: {
            clickLeft(){
                if(this.$router){
                    this.$router.back()
                }else{
                    window.history.back()
                }
            }
        },
        computed: {
            _leftType() {
                const assignObject = Object.assign({
                    showLeft: true,
                    showLeftText: true
                }, this.leftType)
                return assignObject
            },
            _rightType(){
                const assignObject = Object.assign({
                    showRight: true,
                    showType: 'text'
                },this.rightType)
                return assignObject
            },
            rightShow(){
                if(this._rightType.showType === 'text'){
                    return true
                }else if(this._rightType.showType === 'dot'){
                    return false
                }
            }
        }
    }
</script>

<style lang="less">
@commonColor: rgba(85,89,89,1);
.c-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    overflow: hidden;
    background-color: #fff;
    box-shadow:0px 0px 5px 0px rgba(0,0,0,0.15);
    z-index: 600;
    &-title{
        margin: 0 88px;
        width: auto;
        font-size: 18px;
        line-height: 44px;
        font-weight: 400;
        text-align: center;
        color: @commonColor;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
    &-left{
        position: absolute;
        left: 0;
        top: 0;
        width: 88px;
        height: 44px;
        .left-arrow{
            position: absolute;
            top: 15px;
            left: 16px;
            width: 12px;
            height: 12px;
            border: 1px solid @commonColor;
            border-width: 1px 0px 0px 1px;
            transform: rotate(315deg) 
        }
        .left-text{
            position: absolute;
            top: 0;
            left: 36px;
            font-size: 16px;
            line-height: 44px;
            color: @commonColor
        }
    }
    &-right{
        position: absolute;
        right: 0;
        top: 0;
        width: 88px;
        height: 44px;
        .right-more-text{
            position: absolute;
            top: 0;
            right: 18px;
            font-size: 16px;
            line-height: 44px;
            color: @commonColor
        }
        .right-more-dot{
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 25px;
            font-weight: 600;
            line-height: 44px;
            color: @commonColor;
            &::before{
                content: '·';
                position: absolute;
                right: 10px;
            }
            &::after{
                content: '·';
                position: absolute;
                right: -10px;
            }
        }
        span{
            position: absolute;
            top: 0;
            right: 18px;
            font-size: 16px;
            line-height: 44px;
            color: @commonColor
        }
    }
}
</style>
