<template>
    <div class="showflexbox">
        <flexbox class="showflexboxeach">
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
        </flexbox>
        <flexbox class="showflexboxeach">
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
        </flexbox>
        <flexbox class="showflexboxeach">
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-inner">1</div>
            </flexbox-item>
        </flexbox>
        <div class="showflexboxdes">
            <p><a href="https://github.com/TYC-dev/little-toolkit/tree/master/src/components/boxgrid">组件代码</a></p>
        </div>
    </div>
    
</template>

<script>
    import Flexbox from './flex-box/FlexBox'
    import FlexboxItem from './flex-box/FlexBoxItem'

    export default{
        name:'showflexbox',
        components: {
            Flexbox,
            FlexboxItem
        }
    }
</script>

<style lang="less">
.flex-inner{
    color: #fff;
    font-size: 15px;
    line-height: 1.6;
    border-radius: 4px;
    background-color: #45adca
}
.showflexbox{
   .showflexboxeach{
        margin-top: 20px;
    }
    .showflexboxdes{
        margin-top: 10px;
        p{
            font-size: 20px;
        }
    } 
}

</style>

