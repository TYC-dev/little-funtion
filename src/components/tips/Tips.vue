<template>
    <div class="tips"
      :class="showClass">
        <slot>
            <p>{{text}}</p>
        </slot>
    </div>
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
                default: 'bottom'
            }
        },
        computed: {
            showClass() {
                if(this.direction == 'bottom'){
                    return {
                        'tips-bottom': true,
                        'tips-bottom-show': this.show
                    }
                }else if(this.direction == 'top'){
                    return {
                        'tips-top': true,
                        'tips-top-show': this.show
                    }
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
    // mixing
    .tipsTopBottom{
        left: 50%;
        transform: translateX(-50%);
    }
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
        transition: all .5s;
    }
    .tips{
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        color: #fff;
    }
    .tips-top{
        top: -40px;
        .tipsTopBottom
    }
    .tips-top-show{
        top: 64px !important;
    }
    .tips-bottom{
        bottom: -40px;
        .tipsTopBottom
    }
    .tips-bottom-show{
        bottom: 80px !important;
    }
</style>

