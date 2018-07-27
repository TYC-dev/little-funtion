<template>
    <div class="show-dialog">
        <c-group>
            <cell title="默认样式">
                <cswitch v-model="dialogShow"></cswitch>
            </cell>
            <cell title="点击遮罩关闭">
                <cswitch v-model="dialogBlurShow"></cswitch>
            </cell>
        </c-group>

        <cdialog v-model="dialogShow">
            <div class="dialog-box">
                <div class="img-box">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
        </cdialog>
        <cdialog v-model="dialogBlurShow" onMaskHide>
            <div class="dialog-box">
                <div class="img-box">
                    <img src="../assets/logo.png" alt="">
                </div>
            </div>
        </cdialog>
    </div>
</template>

<script>
import Cdialog from './CDialog/Cdialog'
import CGroup from './Cgroup/CGroup'
import Cell from './Cell/Cell'
import Cswitch from './Cswitch/CSwitch'
export default {
    name: 'showdialog',
    components: {
        Cdialog,
        CGroup,
        Cell,
        Cswitch
    },
    data() {
        return {
            dialogShow: false,
            dialogBlurShow: false
        }
    }
}
</script>

<style lang="less">
.dialog-box{
    padding: 10px;
    .img-box{
        img{
            width: 90%;
        }
    }
}
</style>
