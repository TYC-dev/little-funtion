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

<style>
.flex-inner{
    color: #fff;
    font-size: 15px;
    line-height: 1.6;
    border-radius: 4px;
    background-color: #45adca
}
.showflexboxeach{
    margin-top: 20px;
}
</style>

