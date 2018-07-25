<template>
    <div class="c-cell"
    :class="{'c-cell-disabled': disabled}"
    @click="onCLick">
        <div class="c-cell-inner">
            <div class="c-cell-inner-left">
                <div class="c-cell-title">
                    {{title}}
                </div>
            </div>
            <div class="c-cell-inner-right">
                <slot v-if="!isLink"></slot>
                <div class="right-arrow"
                v-if="isLink"></div>
            </div>
        </div>
        <div class="c-cell-extra"
        v-if="cellMore">
            <slot name="cell-extra"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cell',
    props: {
        title: String,
        rightText: String,
        link: String,
        disabled: {
            type: Boolean,
            default: false
        },
        isLink: {
            type: Boolean,
            default: false
        },
        cellMore: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onCLick() {
            if(this.disabled) return
            if(typeof(this.link) != 'undefined'){
                if( this.link.indexOf('http') === -1 ){
                        this.$router.push(this.link)
                }else{
                        window.location.href = this.link
                }
            }else{
                console.log('no links')
            }
        }
    }
}
</script>

<style lang="less">
    .c-cell{
        position: relative;
        padding: 15px 20px;
        box-sizing: border-box;
        color: RGBA(92, 98, 102, 1);
        &-inner{
           display: flex;
           &-left{
            flex: 1;
            text-align: left;
            font-size: 20px;
            line-height: 30px;
            color: RGBA(92, 98, 102, 1);
            }
            &-right{
                position: relative;
                text-align: right;
                .right-arrow{
                    padding-right: 15px;
                    &::after{
                        content: '';
                        position: absolute;
                        top: 11px;
                        left: 0;
                        height: 8px;
                        width: 8px;
                        border-top: 1px solid RGBA(52, 54, 66, 1);
                        border-right: 1px solid RGBA(52, 54, 66, 1);
                        transform: rotate(45deg);   
                    }
                }
            } 
        }
        
        &-extra{
            display: block;
        }
        &-disabled{
            color: #c3c3c3;
            .c-cell-inner-left{
                color: #c3c3c3;
            }
        }
    }
</style>
