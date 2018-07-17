<template>
    <button class="c-btn"
      :class="btnClass"
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
        gradient: {
            type: Boolean,
            default: false
        },
        link: String
    },
    computed: {
        btnClass() {
            
            return [{
                'c-btn-disabled': this.disabled
            },
            `c-btn-${this.type}`,
            this.gradient ? `c-btn-${this.type}-gradient` : ''
            ]
        }
    },
    methods: {
        onClick() {
            if(this.link){
                if(this.link.indexOf('http') == -1){
                    this.$router.push(this.link)
                }else{
                    window.location.href = this.link
                }
            }
        }
    }
}
</script>

<style lang="less">
    @defaultColor: #45adca;
    @normalColor: #f8f8f8;
    @warnColor: #E64340;
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
            border: 1px solid rgba(0, 0, 0, 0.3);
            transform: scale(0.5);
            transform-origin: 0 0;
            border-radius: 12px;
            box-sizing: border-box;
        }
    }
    .c-btn{
        font-size: 18px;
        line-height: 2.5;
        font-weight: normal;
        color: #fff;
    }
    .c-btn-default{
        background-color: @defaultColor;
    }
    .c-btn-normal{
        background-color: @normalColor;
        color: #000;
    }
    .c-btn-warn{
        background-color: @warnColor;
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
    .c-btn-default-gradient{
        @color:  saturate(@defaultColor,50%);
        background-image: linear-gradient(90deg, #45adca 0%, @color 100%);              
    }
    .c-btn-warn-gradient{
        @color:  saturate(@warnColor,50%);
        background-image: linear-gradient(90deg, #E64340 0%, @color 100%);              
    }
</style>


