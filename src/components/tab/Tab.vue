<template>
    <div class="tab-wrap">
		<div class="tab-wrap-inner">
			<slot></slot>
			<div class="tab-bar"
			  :class="transClass"
			  :style="tabBarStyle"></div>
		</div>	
	</div>
</template>

<script>
    export default{
        name: 'tab',
		mounted(){
			this.itemInit()
			this.setIndex()
			this.$nextTick(function(){
				this.childNunber = this.$children.length
			})	
		},
        data(){
            return{
				currentIndex: -1,
				moveDirection: 'forward',
				childNunber: this.$children.length
            }
        },
		props: {
			animate: {
				type: Boolean,
				default: true
			}
		},
        methods:{
			itemInit() {
				if(!this.$children) return
				let children = this.$children
				for(let i = 0; i < children.length; i++){
					if(children[i].isActive == true ){
						this.currentIndex = i
						return
					}
				}
				this.currentIndex = 0;
			},
			setIndex() {
				if(!this.$children) return
				let children = this.$children
				for(let i = 0; i < children.length; i++){
					children[i].currentIndex = i
				}
			}
        },
		computed:{
			barRight() {
				const barRight = (Math.abs(this.currentIndex - this.childNunber + 1) / this.childNunber) * 100 + '%'
				return barRight
			},
			barLeft() {
				const barLeft = (this.currentIndex / this.childNunber) * 100 + '%'
				return barLeft
			},
			tabBarStyle() {
				const commonStyle = {
					left: this.barLeft,
					right: this.barRight
				}
				return commonStyle
			},
			transClass() {
				if( this.animate ){
					return{
						'tab-bar-trans-backward': this.moveDirection === 'backward',
						'tab-bar-trans-forward': this.moveDirection === 'forward'
					}
				}else{
					return 'no-transition'
				}
				
			}
		},
		watch:{
			currentIndex(newIndex, oldIndex){
				this.moveDirection = newIndex > oldIndex ? 'backward' : 'forward';
			}
		}
    }
</script>

<style lang="less" scope>
@transition-time: .3s;
.tab-wrap{
	position: relative;
	width: 100%;
	height: 36px;
	padding: 0 3px;
	box-sizing: border-box;
	border-radius: .2rem;
	background-color: rgba(0,0,0,.1);
	&-inner{
		position: relative;
		display: flex;
		border-radius: .2rem;
		.tab-item{
			flex: 1;
			font-size: 16px;
			line-height: 36px;
			color: rgba(102,102,102,1);
			text-align: center;
			border-radius: .3rem;
			z-index: 501;
			&-icon{
				display: inline-block;
				position: relative;
				top: 3px;
				width: 16px;
				height: 16px;
				margin-right: 5px;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.tab-item-disable{
			background-image: linear-gradient(45deg, 
							rgba(255,255,255,.7) 25%,
							transparent 25%,
							transparent 50%,
							rgba(255,255,255,.7) 50%,
							rgba(255,255,255,.7) 75%,
							transparent 75%);
			background-size: 36px 36px;	
		}
		.tab-bar{
			position: absolute;
			top: 3px;
			left: 0;
			height: 30px;
			background-color: #fff;
			border-radius: .2rem;
			z-index: 500;
		}
		.tab-bar-trans-forward{
			transition: left ease-in-out @transition-time* 0.9,
			right ease-in-out @transition-time;
		}
		.tab-bar-trans-backward{
			transition: left ease-in-out @transition-time,
			right ease-in-out @transition-time* 0.9;
		}
		.no-transition{
			transition: none
		}
	}
}
</style>
