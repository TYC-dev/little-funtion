<template>
    <div class="process-bar-des">
        <ProcessBar :barColor="'#45adca'"></processbar>
        <h1>显示网页滚动进度的顶部进度条</h1>
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
        height: 3000px;
    }
</style>

