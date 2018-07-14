<template>
    <div class="tab-item"
        @click="onItemClick"
        :class="{'tab-item-disable': disabled}">
        <div class="tab-item-icon"
          v-if="hasIcon">
            <slot name="icon"></slot>
        </div>
        <slot></slot>
	</div>
</template>

<script>
    export default{
        name: 'tab-item',
        props: {
            active: {
                type: Boolean,
                default: false
            },
            disabled: Boolean
        },
        computed: {
            hasIcon() {
                if(!this.$slots.icon){
                    return false
                }else{
                    return true
                }
            }
        },
        methods: {
            onItemClick(){
                if(this.disabled) {
                    this.$emit('onDisableClick')
                    return
                }
                this.$parent.currentIndex = this.currentIndex
                this.$emit('on-Item-Click',this.currentIndex)
                this.isActive = true
			}
        },
        data (){
            return {
                currentIndex: -1,
                isActive: this.active
            }
        }
    }
</script>