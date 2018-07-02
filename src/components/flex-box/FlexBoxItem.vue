<template>
    <div class="flex-box-item"
      :style="setStyles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'flexbox-item',
    computed: {
        setStyles(){
            const style = {
                'margin-left': this.$parent.gap + 'px'
            }
            return style
        }
    }
}
</script>
