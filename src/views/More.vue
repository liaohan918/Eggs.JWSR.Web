<template>
	<div id="More">
		<!-- 顶部导航栏 -->
		<div class="top" ref="top">
			<div class="nav">
				<nav-bar :title="title" :links="NavBarItemList" :currentIndex="activePageIndex" @toRoute="toRoute" @onQuery="onQuery"></nav-bar>
			</div>
		</div>
		<!-- 中间内容展示区 -->
		<div class="container" ref="container">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<!-- 左侧导航栏 -->
		<div :class="ScrollOverSwiper ? 'navigation-fixed' : 'navigation'" :style="{'top' : this.$route.path=='/More/SampleReels'? this.leftNavigationStopOffSet+'px' : ''}">
			<el-row class="tac">
				<el-col>
					<el-menu default-active="1" class="el-menu-vertical-demo">
						<el-menu-item v-for="(item,index) in classify" :key="index" :index="item.index">
							<span slot="title">{{item.text}}</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</div>
		<!-- 返回顶部按钮 -->
		<el-backtop :visibility-height="600" :right="100" :bottom="100">
			<div class="backtop">
				UP
			</div>
		</el-backtop>
		<!-- 底部声明 -->
		<div v-if="!this.$route.path=='/More/SampleReels'" class="footer" ref="footer" :class="containerIsEmpty? 'footer-fixed' : ''">
			<div class="statement">
				<p>备案号:XXXXXXXX</p>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		Swiper,
		SwiperSlide,
		directive
	} from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'
	import NavBar from 'components/common/NavBar.vue'
	import Article from './More/Article/Article.vue'

	export default {
		name: "More",
		data() {
			return {
				title: "甲午山人",
				swiperOptions: { //轮播图属性
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true, //无线轮播
					autoplay: {
						delay: 6000 //6秒滚动一次
					}
				},
				NavBarItemList: [{
						route: '/',
						text: '首页'
					},
					{
						route: '/More/Article',
						text: '文章'
					},
					{
						route: '/More/SampleReels',
						text: '作品集'
					}
				],
				activePageIndex: 1, //当前页面	
				searchForm: {
					query: ''
				},
				classify: [{
						text: "最新",
						index: "1" //index值要是字符串
					},
					{
						text: "杂谈",
						index: "2"
					},
					{
						text: "随笔",
						index: "3"
					},
					{
						text: "教程",
						index: "4"
					}
				],
				ScrollOverSwiper: false, //轮播图是否离开界面
				leftNavigationOffSetTop: 580, //左侧导航栏偏移量，当滚动大于该偏移量时停靠
				leftNavigationStopOffSet: 75, //左侧导航栏停靠位置
				containerIsEmpty: false
			}
		},
		components: {
			NavBar,
			Article
		},
		directives: {
			swiper: directive
		},
		methods: {
			onQuery() {
				console.log("查询成功")
			},
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
				let offsetTop = this.leftNavigationOffSetTop
				if (scrollTop > offsetTop) {
					this.ScrollOverSwiper = true
				} else {
					this.ScrollOverSwiper = false
				}
			},
			toRoute(payload) {
				// console.log(payload)				
				if (payload == this.$router.currentRoute.path)
					return
				this.$router.push({
					path: payload
				})
				if (payload == "/") {
					this.$destroy() //返回首页需要销毁发现页组件实例，因为发现页是被缓存的，点击首页后再回来，导航会停留在首页标签
				} else if (payload == "/More/Article") {
					this.leftNavigationOffSetTop = 580
				} else {
					this.leftNavigationOffSetTop = 75
				}
			},
			computeContainerIsEmpty() {
				let bodyHeight = document.body.clientHeight //body高度
				let screenHeight = window.screen.height //屏幕高
				console.log(`内容高度:${bodyHeight},屏幕高度:${screenHeight}`)
				if (bodyHeight < screenHeight) {
					this.containerIsEmpty = true
				} else {
					this.containerIsEmpty = false
				}
			}
		},
		computed: {

		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
			this.computeContainerIsEmpty()
		},
		updated() {
			console.log("当前屏幕高度：" + document.body.clientHeight)
			this.computeContainerIsEmpty()
		}
	}
</script>
<style scoped>
	#More {
		/* display: flex;
		flex-direction: column; */
		height: 100%;
	}

	/* 顶部 */
	.top {
		height: 62px;
		padding: 10px 351px;
		position: fixed;
		width: 100%;
		top: 0px;
		background-color: #ffffff;
		z-index: 9999;
		box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
	}

	.container {
		margin-top: 75px;
		height: 100%;
	}


	.navigation {
		position: absolute;
		top: 580px;
		left: 250px;
		width: 100px;
	}

	.navigation-fixed {
		position: fixed;
		top: 65px;
		left: 250px;
		width: 100px;
	}

	.el-menu-vertical-demo {
		border-right: 0px;
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

	.footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0px 361px;
		height: 218px;
		text-align: center;
		background-color: #282828;
		width: 100%;
	}

	.footer-fixed {
		position: fixed;
		bottom: 0;
	}

	.statement {
		margin: 0 auto;
	}
</style>
