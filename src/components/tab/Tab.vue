<template>
    <div class="tab-wrap">
		<div class="tab-wrap-inner">
			<div 
              class="tab-item"
              v-for="(item,index) in itemList"
              :key="item.index"
              @click="toggle(index,item)">
			  	{{ item.content }}
			</div>
			<div class="tab-bar"
			  :class="transClass"
			  :style="tabBarStyle"></div>
		</div>	
	</div>
</template>

<script>
    export default{
        name: 'tab',
        data(){
            return{
				currentIndex: 0,
				moveDirection: 'forward'
            }
        },
		props: {
			itemList: Array,
			animate: {
				type: Boolean,
				default: true
			}
		},
        methods:{
            toggle(index, item){
				this.currentIndex = index;
				if(!item.link == ''){
					this.$router.push(item.link)
				}
			}
        },
		computed:{
			barRight() {
				const barRight = (Math.abs(this.currentIndex - this.itemList.length + 1) / this.itemList.length) * 100 + '%'
				return barRight
			},
			barLeft() {
				const barLeft = (this.currentIndex / this.itemList.length) * 100 + '%'
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
	background-color: rgba(0,0,0,.05);
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
			z-index: 501;
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
