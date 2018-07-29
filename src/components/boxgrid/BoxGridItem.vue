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
    import { goLink } from '../../libs/goLink.js'
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
                goLink( this.link, this.$router )
            }
        }
    }
</script>

