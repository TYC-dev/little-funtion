<template>
    <div class="show-button-des">
        <cbutton>默认</cbutton>
        <cbutton type="normal">一般</cbutton>
        <cbutton type="warn">警告</cbutton>
        <cbutton :disabled="true">禁用</cbutton>
        <cbutton link="/">路由跳转</cbutton>
        <cbutton link="https://www.baidu.com">外部链接</cbutton>
        <cbutton :gradient="true">渐变 默认</cbutton>
        <cbutton type="warn" :gradient="true">渐变 警告</cbutton>
    </div>
</template>

<script>
    import Cbutton from './Cbutton/Cbutton'

    export default{
        name: 'showCbutton',
        components: {
            Cbutton
        },
        methods: {
            btnClick() {
                console.log('click')
            }
        }
    }
</script>

<style>
    .show-button-des{
        margin: 10px;
    }
</style>
