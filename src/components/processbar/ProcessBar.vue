<template>
    <div class="process-bar">
        <div class="process-bar-inner"
            :style="barStyle"></div>
    </div>
</template>

<script>
    export default{
        name: 'processbar',
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
        },
        props:{
            barColor: {
                type: String,
                default: 'blue'
            }
        },
        data(){
            return{
                scrollProcess: 0
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
                let offsetHeight = document.documentElement.offsetHeight;
                let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
                let scrollPer = scrollTop / (offsetHeight - clientHeight);

                this.scrollProcess = scrollPer.toFixed(2)*100
            }
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="less" scope>
    .process-bar{
        position: absolute;
        top: 0;
        left: 0;
        height: 3px;
        width: 100%;
        .process-bar-inner{
            height: 3px;
            width: 100%;
        }
    }
</style>