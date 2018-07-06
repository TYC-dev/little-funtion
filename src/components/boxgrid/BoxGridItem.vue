<template>
    <div class="boxgrid-item"
      @click="onGridClick">
        <div class="boxgrid-item-icon"
          v-if="hasIcon">
            <slot name="icon"></slot>
        </div>
        <div class="boxgrid-item-label">
            <slot name="label"></slot>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'box-grid-item',
        data(){
            return{
                hasIcon: true
            }
        },
        props: {
            link: String
        },
        mounted (){
            if(!this.$slots.icon){
                this.hasIcon = false
            }
        },
        methods: {
            onGridClick(){
                if(typeof(this.link) != 'undefined'){
                    if( this.link.indexOf('http') === -1 ){
                        this.$router.push(this.link)
                    }else{
                        window.location.href = this.link
                    }
                }else{
                    console.log('no links')
                }
            }
        }
    }
</script>

