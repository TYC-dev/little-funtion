<template>
    <div class="process-bar"
      :class="{'process-bar-header': withHeader}">
        <div class="process-bar-inner"
            :style="barStyle"></div>
    </div>
</template>

<script>
    export default{
        name: 'processbar',
        mounted(){
            if(this.$parent.$parent.$slots.header){
                this.withHeader = true
            }
            this.$parent.$el.addEventListener('touchmove', this.handleScroll)
            console.log(this.$parent.$parent.$slots.header)
        },
        props:{
            barColor: {
                type: String,
                default: 'blue'
            }
        },
        data(){
            return{
                scrollProcess: 0,
                withHeader: false
            }
        },
        computed: {
            barStyle() {
                const styles = {
                    width: this.scrollProcess + '%',
                    backgroundColor: this.barColor
                }
                return styles
            }
        },
        methods: {
            handleScroll() {
                let clientHeight = document.documentElement.clientHeight || window.innerHeight;
                let offsetHeight = this.$parent.$el.offsetHeight;
                let scrollTop = this.$parent.$parent.$refs.viewBox.scrollTop
                let scrollPer = scrollTop / (offsetHeight - clientHeight);
                this.scrollProcess = scrollPer.toFixed(2)*100
                //console.log(this.$parent.$parent.$refs.viewBox.scrollTop)
            }
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="less" scope>
    .process-bar{
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        width: 100%;
        .process-bar-inner{
            height: 3px;
            width: 100%;
        }
    }
    .process-bar-header{
        top: 44px
    }
</style>