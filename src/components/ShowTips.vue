<template>
    <div class="show-tips-box">
        <cbutton @click.native="changeShow1">顶部</cbutton>
        <cbutton @click.native="changeShow2">底部</cbutton>
        <tips v-model="show1" :direction="'top'"><span>tips top</span></tips>
        <tips v-model="show2" :direction="'bottom'"><span>tips bottom</span></tips>
    </div>
</template>

<script>
    import Tips from './tips/Tips'
    import Cbutton from './Cbutton/Cbutton'

    export default{
        name: 'showtips',
        components: {
            Tips,
            Cbutton
        },
        methods: {
            changeShow1() {
                this.show1 = true
            },
            changeShow2() {
                this.show2 = true
            },
            changeShow3() {
                this.show3 = true
            }
        },
        data() {
            return {
                show1: false,
                show2: false,
                show3: false
            }
        }
    }
</script>

<style>
.show-tips-box{
    margin: 10px;
}
</style>

