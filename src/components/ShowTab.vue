<template>
    <div class="tab-des">
        <h2>可切换的tab</h2>
        <h5>默认</h5>
        <tab>
            <tab-item>123</tab-item>
            <tab-item>345</tab-item>
        </tab>
        <tab style="margin-top: 10px">
            <tab-item>123</tab-item>
            <tab-item>345</tab-item>
            <tab-item>567</tab-item>
        </tab>
        <h5>无动画</h5>
        <tab :animate="false">
            <tab-item>123</tab-item>
            <tab-item>345</tab-item>
        </tab>
        <h5>设置默认选择tabitem</h5>
        <tab>
            <tab-item>123</tab-item>
            <tab-item active>345</tab-item>
        </tab>
        <tab style="margin-top: 10px">
            <tab-item>123</tab-item>
            <tab-item active>345</tab-item>
            <tab-item>567</tab-item>
        </tab>
        <h5>设置icon</h5>
        <tab>
            <tab-item>
                <img slot="icon" src="../assets/icon/comments.png" alt="">
                <span>123</span>
            </tab-item>
            <tab-item>
                <img slot="icon" src="../assets/icon/pic.png" alt="">
                <span>345</span>
            </tab-item>
        </tab>
        <h5>设置不可选择tabitem</h5>
        <tab>
            <tab-item>
                <span>123</span>
            </tab-item>
            <tab-item>
                <span>345</span>
            </tab-item>
            <tab-item disabled @onDisableClick="disableClick">
                <span>567</span>
            </tab-item>
        </tab>
        <h5></h5>
        <tab>
            <tab-item @on-Item-Click="swichTab">1</tab-item>
            <tab-item @on-Item-Click="swichTab">2</tab-item>
        </tab>
        <tab-block1 v-show="tabShow == 0"></tab-block1>
        <tab-block2 v-show="tabShow == 1"></tab-block2>

        <tips v-model="showTips"><span>选项卡不可用</span></tips>
    </div>
</template>

<script>
    import Tab from './tab/Tab'
    import TabItem from './tab/TabItem'
    import Tips from './tips/Tips'

    import TabBlock1 from './ShowTabBlock1'
    import TabBlock2 from './ShowTabBlock2'

    export default{
        name: 'showTab',
        components:{
            Tab,
            TabItem,
            Tips,
            TabBlock1,
            TabBlock2
        },
        methods: {
            swichTab(index) {
                this.tabShow = index
            },
            disableClick() {
                this.showTips = true
            }
        },
        data(){
            return{
                tabShow: 0,
                showTips: false
            }
        }
    }
</script>

<style lang="less">
.tab-des{
    padding: 0 10px;
}
.show-tab-block{
    padding: 10px;
    text-align: left;
    p{
        font-size: 20px;
    }
}
</style>
