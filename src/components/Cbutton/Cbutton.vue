<template>
    <button class="c-btn"
      :class="{
          'c-btn-default': type === 'default',
          'c-btn-normal': type === 'normal',
          'c-btn-warn': type === 'warn',
          'c-btn-disabled': disabled
      }"
      @click="onClick">
        <slot>
            <span>{{text}}</span>
        </slot>
    </button>
</template>

<script>
export default {
    name: 'cbutton',
    props: {
        text: String,
        type: {
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        link: String
    },
    methods: {
        onClick() {
            
        }
    }
}
</script>

<style lang="less">
    .c-btn{
        width: 100%;
        border: none;
        outline: 0;
    }
    .c-btn{
        position: relative;
        display: block;
        padding: 0 14px;
        margin-top: 10px;
        border-radius: 6px;
        box-sizing: border-box;
        &::after{
            content: '';
            position: absolute;
            width: 200%;
            height: 200%;
            top: 0;
            left: 0;
            border: 1px solid rgba(0, 0, 0, 0.4);
            transform: scale(0.5);
            transform-origin: 0 0;
            border-radius: 12px;
        }
    }
    .c-btn{
        font-size: 18px;
        line-height: 2.5;
        font-weight: normal;
        color: #fff;
    }
    .c-btn-default{
        background-color: #45adca;
    }
    .c-btn-normal{
        background-color: #f8f8f8;
        color: #000;
    }
    .c-btn-warn{
        background-color: #E64340;
    }
    .c-btn-disabled{
        background-color: #b7b7b7;
        background-image: linear-gradient(45deg, 
							rgba(255,255,255,.7) 25%,
							transparent 25%,
							transparent 50%,
							rgba(255,255,255,.7) 50%,
							rgba(255,255,255,.7) 75%,
                            transparent 75%);
        background-size: 45px 45px;
        color: #fff;
    }
    .c-btn-gradient{
                          
    }
</style>


