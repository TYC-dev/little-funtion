<template>
    <div class="tips"
      :class="{'tips-show': show}">
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
    .tips-show{
        bottom: 80px !important;
    }
    .tips{
        z-index: 550;
        position: fixed;
        left: 50%;
        bottom: -40px;
        min-width: 76px;
        padding: 5px 15px;
        transform: translateX(-50%);
        transition: all .5s;
        border-radius: 4px;
        background-color: #9f9f9f;
        font-size: 16px;
        line-height: 34px;
        text-align: center;
        color: #fff;
    }
</style>

