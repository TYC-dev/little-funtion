<template>
    <div class="process-bar">
        <div class="process-bar-inner"
            v-bind:style="{ width: scrollProcess + '%', backgroundColor: barColor }"></div>
    </div>
</template>

<script>
    export default{
        name: 'processbar',
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
        mounted(){
            window.addEventListener('scroll',()=>{
                let clientHeight = document.documentElement.clientHeight || window.innerHeight;
                let offsetHeight = document.documentElement.offsetHeight;
                let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
                let scrollPer = scrollTop / (offsetHeight - clientHeight);

                this.scrollProcess = scrollPer.toFixed(2)*100
            })
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
</style>