<template>
	<div id="SampleReels">
		<div class="container-main">
			<vue-waterfall-easy ref="waterfall" :imgsArr="imgsArr" @scrollReachBottom="getData" :maxCols="4">				
			</vue-waterfall-easy>
		</div>
	</div>
</template>
<script>
	import vueWaterfallEasy from 'vue-waterfall-easy'

	export default {
		name: "SampleReels",
		components: {
			vueWaterfallEasy
		},
		data() {
			return {
				//waterfallWidth: 0,//瀑布流显示区域宽度
				imgsArr: [
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					},
					{
						src: '/img/homebg.jpg',
						href: ''
					}
				]
			}
		},
		methods: {
			handleScroll() {
				// console.log("滚动")
				this.getData()
				
			},
			getData(){
				this.imgsArr.push(
					{
						src: '/img/homebg.jpg',
						href: ''
					})
				
			}
		},
		mounted() {
			console.log(this.$refs.waterfall.$el)//.addEventListener('scroll', this.handleScroll)
			//监听鼠标滚动事件，因为当图片不足够多时，是不会让瀑布流出现滚动条和触发瀑布流滚动加载图片事件，这时候就需要手动监听滚动
			if(document.addEventListener) 
				window.addEventListener('DOMMouseScroll', this.handleScroll, false)
			window.onmousewheel=document.onmousewheel=this.handleScroll;
		}
	}
</script>
<style scoped>
	#SampleReels{
		width: 100%;
		overflow: hidden;
	}
	.container-main {
		/* 瀑布流页面高度 */
		/* height: calc(100vh - 62px - 218px - 15px); */
		height: calc(100vh - 62px - 15px);
		overflow: hidden;
	}	
	.backtop {
		height: 100%;
		width: 100%;
		background-color: #f2f5f6;
		box-shadow: 0 0 6px rgba(0, 0, 0, .12);
		text-align: center;
		line-height: 40px;
		color: #a1a179;
		border-radius: 10px;
	}
</style>
