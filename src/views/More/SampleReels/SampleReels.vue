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
	import {
		debounce
	} from 'api/common.js'

	export default {
		name: "SampleReels",
		components: {
			vueWaterfallEasy
		},
		data() {
			return {
				catagory: "",
				size: 10,
				imgsArr: [],
				currentPageIndex: 1
			}
		},
		watch: {},
		methods: {
			handleScroll(e) {
				if (!this.$refs.waterfall.$el)
					return
				let waterfallHeight = this.$refs.waterfall.$el.offsetHeight //瀑布流布局高度
				let colsHeightArrMax = Math.max(...this.$refs.waterfall.colsHeightArr) //最高的那一列
				if (colsHeightArrMax > waterfallHeight) { //图片高度已达瀑布流容器底部
					//已经可以触发瀑布流自带加载图片方法
					return
				}
				if (e.deltaY > 0) //向下滚动
					this.getData(this.catagory, this.size)

			},
			getData(catagory, size, callback) {
				console.log(`查询${size}幅${catagory}的作品`)
				this.$api.baseGet("SampleReels/SampleReel/DownImg", {
						catagory: this.catagory,
						size: this.size,
						pageIndex: this.currentPageIndex
					},
					r => {
						if (r.success) {
							if(r.response){
								r.response.forEach((item,index) => {
									console.log(item)
									this.imgsArr.push({
										src: this.$store.state.sampleReelImgServices + '/' + item.imgaddress,
										href: 'javascript:void(0);'
									})
								})
								if(r.response.length > 0)
									this.currentPageIndex++
							}
						}
					})
				if (callback)
					callback()
			}
		},
		mounted() {
			//将滚动监听事件加一层防抖函数
			var d = debounce(this.handleScroll, 1000)
			//监听鼠标滚动事件，因为当图片不足够多时，是不会让瀑布流出现滚动条和触发瀑布流滚动加载图片事件，这时候就需要手动监听滚动
			if (document.addEventListener)
				window.addEventListener('DOMMouseScroll', d, false)
			window.onmousewheel = document.onmousewheel = d;
		},
		beforeCreate() {
			this.$bus.$on("onCatagoryChange", payload => { //注册类别变更事件
				console.log(`路由页面：${payload.routeName},类别变更,变更的类别:${payload.catagory}`)
				if (payload.routeName != "SampleReels")
					return
				this.catagory = payload.catagory				
				this.currentPageIndex = 1//重新查询
				this.imgsArr = []
				if(this.catagory == "最新")
					this.catagory = ""
				this.getData(this.catagory, this.size)
			})
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {				
				vm.getData(vm.catagory, vm.size)
			})
		}
	}
</script>
<style scoped>
	#SampleReels {
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
