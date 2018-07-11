<template>
    <div class="process-bar-des">
        <ProcessBar :barColor="'#45adca'"></processbar>
        <h1>显示网页滚动进度的顶部进度条</h1>
        <a href="https://github.com/TYC-dev/little-toolkit/blob/master/src/components/processbar/ProcessBar.vue">组件代码</a>
        <div v-for="i in 100" :key="i"><p>{{i}}</p></div>
    </div>
</template>

<script>
    import ProcessBar from './processbar/ProcessBar'

    export default{
        name: 'showProcessBar',
        components:{
            ProcessBar
        }
    }    
</script>

<style>
    .process-bar-des{
        position: relative;
    }
</style>

