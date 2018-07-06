<template>
    <div class="box-grid-container">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name: 'box-grid'
    }
</script>

<style lang="less">
 @boederColer: #c7c7c7;
    .box-grid-container{
        position: relative;
        &::after{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            border-top: 1px solid @boederColer;
            transform: scaleY(0.5)
        }
        .box-grid-row{
            display: flex;
            .boxgrid-item{
                flex: 1;
                position: relative;
                padding: 15px 0;
                width: 100%;
                &::after{
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    border-right: 1px solid @boederColer;
                    transform: scaleX(0.5)
                }
                &::before{
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    border-top: 1px solid @boederColer;
                    transform: scaleY(0.5)
                }
            }
        }
        
    }
</style>

