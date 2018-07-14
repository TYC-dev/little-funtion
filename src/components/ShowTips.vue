<template>
    <div class="show-tips-box">
        <button @click="changeShow" style="padding: 10px 20px">{{show}}</button>
        <tips v-model="show" :direction="'top'"><span>11111</span></tips>
    </div>
</template>

<script>
    import Tips from './tips/Tips'

    export default{
        name: 'showtips',
        components: {
            Tips
        },
        methods: {
            changeShow() {
                this.show = true
            }
        },
        data() {
            return {
                show: false
            }
        }
    }
</script>
