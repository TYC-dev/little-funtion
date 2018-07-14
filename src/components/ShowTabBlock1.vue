<template>
    <div class="show-tab-block">
        <p>原本的tab组件是一整个组件，通过传入props来显示tabitem的内容，但是这样使得组件难以自定义，同时组件代码不方便阅读，也会使引入tab的组件的数据变得复杂混乱。</p>
        <p>改进后的组件分为了tab和tabitem父子组件，引入代码结构清晰明了，tabitem拥有了可设定的属性，同时可以通过监听onitemclick事件实现自定义点击效果</p>
        <p><a href="https://github.com/TYC-dev/little-toolkit/blob/master/src/components/tab/Tab.vue">组件代码</a></p>
    </div>
</template>

<script>
    export default{
        name: 'tab-block1'
    }
</script>

