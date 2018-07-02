<template>
    <div class="tab-des">
        <h2>可切换的tab</h2>
        <h5>无动画</h5>
        <tab :animate="false"
          :itemList="tabList1"></tab>
        <h5>有动画</h5>
        <tab :animate="true"
          :itemList="tabList"></tab>
        
        <router-view></router-view>
    </div>
</template>

<script>
    import Tab from './tab/Tab'

    export default{
        name: 'showTab',
        components:{
            Tab
        },
        data(){
            return{
                tabList:[{
                    content: '哈哈',
                    link: '/tab/tabblock1'
                },{
                    content: '呵呵',
                    link: '/tab/tabblock2'
                }],
                tabList1:[{
                    content: '123'
                },{
                    content: '321'
                }]
            }
        }
    }
</script>

<style>
.tab-des{
    padding: 0 10px;
}
.show-tab-block{
    padding: 10px;
    text-align: left;
}
</style>
