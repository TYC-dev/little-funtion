<template>
    <transition :name="transitionName">
        <div class="tips"
        :class="tipClass"
        v-show="show">
            <slot>
                <p>{{text}}</p>
            </slot>
        </div>
    </transition>
    
</template>

<script>
    export default{
        name: 'tips',
        props: {
            value: Boolean,
            text: String,
            showTime: {
                type: Number,
                default: 2000
            },
            direction: {
                type: String,
                default: 'default'
            }
        },
        computed: {
            transitionName() {
                if(this.direction === 'top'){
                    return 'tips-from-top'
                }else if(this.direction === 'bottom'){
                    return 'tips-from-bottom'
                }else{
                    return 'tips-fade'
                }
            },
            tipClass(){
                return{
                    'tips-top': this.direction === 'top',
                    'tips-bottom': this.direction === 'bottom',
                    'tips-fade': this.direction === 'default'
                }
            }
        },
        watch: {
            show(val) {
                if(val === true){
                    this.show = true
                    console.log('show')
                    this.timeout = setTimeout(()=>{
                        this.show = false
                        this.$emit('input',false)
                        console.log('hide')
                    },this.showTime)
                }
            },
            value(val) {
                this.show = val
            }
        },
        data() {
            return{
                show: false
            }
        }
    }
</script>

<style lang="less">
    // style
    .tips{
        z-index: 700;
        position: fixed;
        min-width: 76px;
        padding: 5px 15px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .tips{
        left: 50%;
        transform: translateX(-50%);
    }
    .tips{
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        color: #fff;
    }
    .tips-top{
        top: 64px;
    }
    .tips-bottom{
        bottom: 80px;
    }
    .tips-fade{
        bottom: 80px;
    }
    @import '../../styles/transition.less';
</style>

