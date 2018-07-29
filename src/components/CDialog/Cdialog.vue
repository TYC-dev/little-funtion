<template>
    <div class="c-dialog-wrap">
        <transition name="dialog-fade">
            <div class="c-dialog"
            v-show="value">
                <div class="c-dialog-inner">
                    <div class="c-dialog-close"
                    v-if="!onMaskHide"
                    @click="hide"></div>
                    <slot></slot>  
                </div>
            </div>
        </transition>
        <transition name="dialog-fade">
            <div class="c-dialog-mask"
            v-show="value"
            @click="hideOnMask"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'cdialog',
        props: {
            value: Boolean,
            onMaskHide: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hide: function() {
                this.$emit('input',false)
            },
            hideOnMask: function() {
                if(!this.onMaskHide) return
                this.$emit('input',false)
            }
        },
        data() {
            return {
                show: this.value
            }
        }
    }
</script>

<style lang="less">
.c-dialog-wrap{
    .c-dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .c-dialog{
        z-index: 1000;
        display: table;
        width: 80%;
        max-width: 370px;
        min-height: 1px;
        margin: auto;
        background-color: #fff;
        border-radius: 15px;
        &-inner{
            position: relative;
            .c-dialog-close{
                position: absolute;
                right: 0;
                top: -45px;
                width: 25px;
                height: 25px;
                border: 1px solid #fff;
                border-radius: 50%;
                &::before{
                    content: '';
                    position: absolute;
                    top: 11px;
                    left: 5px;
                    width: 15px;
                    border-top: 1px solid #fff;
                    transform: rotate(45deg);
                }
                &::after{
                    content: '';
                    position: absolute;
                    top: 11px;
                    left: 5px;
                    width: 15px;
                    border-top: 1px solid #fff;
                    transform: rotate(315deg);
                }
            }
        }
    }
    .c-dialog-mask{
        z-index: 999;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
}
.dialog-fade-enter-active, .dialog-fade-leave-active{
    transition: all .3s ease;
}
.dialog-fade-enter, .dialog-fade-leave-to{
    opacity: 0;
}

</style>
