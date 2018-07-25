<template>
    <div class="show-group">
        <c-group>
            <cell title="title" isLink></cell>
            <cell title="title">right-text</cell>
            <cell title="disabled" disabled>true</cell>
            <cell title="route link" isLink link="/tips">link</cell>
            <cell title="http link" isLink link="https://www.baidu.com">link</cell>
            <cell title="extra content" cellMore>
                cellMore
                <div class="cell-extra-box"
                slot="cell-extra">
                    <div class="small-box">1234</div>
                </div>
            </cell>
        </c-group>
    </div>
    
</template>

<script>
import CGroup from './Cgroup/CGroup'
import Cell from './Cell/Cell'
export default {
    name: 'showgroup',
    components: {
        CGroup,
        Cell
    }
}
</script>

<style>
.cell-extra-box{
    overflow: hidden;
}
.small-box{
        position: relative;
        float: left;
        height: 32px;
        padding: 10px 20px;
        font-size: 20px;
        background-color: #c9c9c9;
        color: #fff;
        border-radius: 32px;
    } 
</style>
