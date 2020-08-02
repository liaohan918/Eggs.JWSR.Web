<template>
	<div class="home">
		<!-- 顶部导航栏 -->
		<div class="top" :class="{'top-backgourd-color-white': ScrollOverSwiper}">
			<div class="nav">
				<el-row>
					<el-col :xs="12" :md="4">
						<div class="top-logo">
							<img src="../assets/logo.png" style="width: 38px; height: 38px" /><a :style="{ color: navFontColor }">{{title}}</a>
						</div>
					</el-col>
					<el-col :xs="0" :md="16"><a style="color: transparent;">1</a></el-col> <!-- 用于做偏移，因为顶部导航栏是响应式,没使用offset -->
					<el-col :xs="12" :md="4">
						<div class="top-nav">
							<el-link><a style="color: #1296DB;">首页</a></el-link>
							<router-link :to="{path: '/More'}">
								<el-link><a :style="{ color: navFontColor}">发现</a></el-link>
							</router-link>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<!-- 标语 -->
		<div class="slogan">
			<p style="color: #FFFFFF; font-size: 48px;">甲午山人</p>
			<p style="color: #FFFFFF; font-size: 48px;">这里是标语的内容</p>
		</div>
		<!-- 核心内容 -->
		<div class="container">
			<!-- 轮播图 -->
			<div class="swiper">
				<swiper ref="mySwiper" :options="swiperOptions">
					<swiper-slide>
						<div class="swiper-content">
							<img src="../../public/swiper/banner7.png" alt="">
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="swiper-content">
							<img src="../../public/swiper/banner8.png" alt="">
						</div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<!-- 文章展示区 -->
			<div class="content">
				<div class="content-title" ref="content1">
					<h1>这里也是一串标语</h1>
					<p style="color: #666666;font-size: 20px;">这里放一些博客、文章或随笔，中间下边放一个视频介绍</p>
				</div>
				<!-- 文章缩略图 -->
				<div class="content-list">
					<content-item :visits="contentList[0].visits" :likes="contentList[0].likes" :comments="contentList[0].comments"
					 :forwardingVolume="contentList[0].forwardingVolume" :title="contentList[0].title" :url="contentList[0].url" :src="contentList[0].src"
					 class="item-middle content-list-item">
					</content-item>
					<content-item :visits="contentList[1].visits" :likes="contentList[1].likes" :comments="contentList[1].comments"
					 :forwardingVolume="contentList[1].forwardingVolume" :title="contentList[1].title" :url="contentList[1].url" :src="contentList[1].src"
					 class="item-small content-list-item">
					</content-item>
					<content-item :visits="contentList[2].visits" :likes="contentList[2].likes" :comments="contentList[2].comments"
					 :forwardingVolume="contentList[2].forwardingVolume" :title="contentList[2].title" :url="contentList[2].url" :src="contentList[2].src"
					 class="item-center content-list-item">
					</content-item>
					<div class="item-center content-list-item">
					</div>
					<content-item :visits="contentList[3].visits" :likes="contentList[3].likes" :comments="contentList[3].comments"
					 :forwardingVolume="contentList[3].forwardingVolume" :title="contentList[3].title" :url="contentList[3].url" :src="contentList[3].src"
					 class="item-small content-list-item">
					</content-item>
					<content-item :visits="contentList[4].visits" :likes="contentList[4].likes" :comments="contentList[4].comments"
					 :forwardingVolume="contentList[4].forwardingVolume" :title="contentList[4].title" :url="contentList[4].url" :src="contentList[4].src"
					 class="item-middle content-list-item">
					</content-item>
				</div>
			</div>
			<!-- 画作展示区 -->
			<div class="picture">
				<div class="picture-title">
					<h1>这里也是一串标语</h1>
					<p style="color: #666666;font-size: 20px;">按分类展示作品，可分油画、书法、国画、其它等等</p>
				</div>
				<!-- 四幅代表作品展示列表 -->
				<div class="picture-list">
					<picture-item :text="'国画'" :src="chinesePicture" class="picture-list-item" />
					<picture-item :text="'书法'" :src="calligraphyPicture" class="picture-list-item" />
					<picture-item :text="'油画'" :src="oilPaintingPicture" class="picture-list-item" />
					<picture-item :text="'其它'" :src="otherPicture" class="picture-list-item" />
				</div>
			</div>
			<!-- 底部声明 -->
			<div class="footer">
				<p>备案号:XXXXXXXX</p>
			</div>
		</div>
		<!-- 回到顶部按钮 -->
		<el-backtop :visibility-height="920" :right="100" :bottom="100">
			<div class="backtop">
				UP
			</div>
		</el-backtop>
		<!-- 二维码 -->
		<div class="qr-code">
			<img src="../../public/swiper/QRCode.jpg" alt="" width="100%" height="100%">
		</div>
	</div>
</template>

<script>
	import {
		Swiper,
		SwiperSlide,
		directive
	} from 'vue-awesome-swiper'
	import ContentItem from './Home/ContentItem.vue'
	import PictureItem from './Home/PictureItem.vue'
	import 'swiper/css/swiper.css'

	export default {
		name: "Home",
		components: {
			Swiper,
			SwiperSlide,
			ContentItem,
			PictureItem
		},
		directives: {
			swiper: directive
		},
		data() {
			return {
				title: "甲午山人",
				navFontColor: "#ffffff", //顶部导航栏文字颜色
				swiperOptions: { //轮播图属性
					effect: "fade", //轮播图动画
					pagination: {
						el: '.swiper-pagination',
						type: 'custom' //自定义分页器类型（没有对应css及代表隐藏）
					},
					loop: true, //无线轮播
					effect: "fade", //swiper 6.0以上版本配合vue-awesome-swiper不支持淡入淡出
					autoplay: {
						delay: 6000 //6秒滚动一次
					}
				},
				ScrollOverSwiper: false, //轮播图滚动出页面范围
				chinesePicture: require("../../public/swiper/banner8.png"), //国画
				oilPaintingPicture: require("../../public/swiper/banner8.png"), //油画
				calligraphyPicture: require("../../public/swiper/banner7.png"), //书法
				otherPicture: require("../../public/swiper/banner7.png"),
				contentList: [ //文章列表内容
					{
						url: "", //超链接
						src: require("../../public/swiper/banner7.png"),
						title: "文章1", //文章标题
						visits: 6666, //访问量
						likes: 1000, //点赞量
						comments: 2000, //评论数
						forwardingVolume: 150 //转发量
					},
					{
						url: "", //超链接
						src: require("../../public/swiper/banner7.png"),
						title: "文章2", //文章标题
						visits: 6666, //访问量
						likes: 1000, //点赞量
						comments: 2000, //评论数
						forwardingVolume: 150 //转发量
					},
					{
						url: "", //超链接
						src: require("../../public/swiper/banner7.png"),
						title: "文章3", //文章标题
						visits: 6666, //访问量
						likes: 1000, //点赞量
						comments: 2000, //评论数
						forwardingVolume: 150 //转发量
					},
					{
						url: "", //超链接
						src: require("../../public/swiper/banner8.png"),
						title: "文章4", //文章标题
						visits: 6666, //访问量
						likes: 1000, //点赞量
						comments: 2000, //评论数
						forwardingVolume: 150 //转发量
					},
					{
						url: "", //超链接
						src: require("../../public/swiper/banner8.png"),
						title: "文章5", //文章标题
						visits: 6666, //访问量
						likes: 1000, //点赞量
						comments: 2000, //评论数
						forwardingVolume: 150 //转发量
					}
				]
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper
			}
		},
		methods: {
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
				let offsetTop = 920 // 轮播图的高度
				if (scrollTop > offsetTop) {
					this.ScrollOverSwiper = true
					this.navFontColor = "#434343"
				} else {
					this.ScrollOverSwiper = false
					this.navFontColor = "#ffffff"
				}

			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style scoped>
	a {
		text-decoration: none
	}

	/* 顶部 */
	.top {
		height: 75px;
		padding: 20px 80px;
		position: fixed;
		width: 100%;
		top: 0px;
		z-index: 9999;
	}
	.top-backgourd-color-white {
		background-color: #ffffff;
		box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
	}
	/* 顶部左侧logo */
	.top-logo {
		display: flex;
		align-items: center;
		font-family: "PingFang SC";
		font-size: 25px;
	}
	/* 顶部右侧导航 */
	.top-nav {
		margin-top: 10px;
	}
	.top-nav a {
		font-family: "PingFang SC";
		font-size: 18px;
		margin: 0 20px;
	}

	.container {
		width: 100%;
	}

	.swiper img {
		width: 100%;
		height: 920px;
	}

	.content {
		padding: 100px 361px;
		background-color: #fbfcff;
	}

	.content-title {
		text-align: center;
	}

	/* 文章列表包含层 */
	.content-list {
		margin-top: 20px;
		column-count: 3;
		column-gap: 10px;
	}

	/* 每个文章item */
	.content-list-item {
		margin-bottom: 10px;
		break-inside: avoid;
		background: #fff;
	}

	.content-list-item:hover {
		box-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
	}

	.item-small {
		height: 220px;
	}

	.item-middle {
		height: 300px;
	}

	.item-center {
		height: 260px;
	}

	.picture {
		padding: 100px 361px;
		background-color: #f5f6f9;
		background: url(../../public/img/homebg.jpg) no-repeat;
		filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
		-moz-background-size: 100% 100%;
		background-size: 100% 100%;
	}

	.picture-title {
		text-align: center;
	}

	.picture-list {
		margin-top: 20px;
		column-count: 4;
		column-gap: 10px;
	}

	.picture-list-item {
		height: 520px;
	}

	.picture-list-item:hover {
		box-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
	}

	.footer {
		padding: 100px 361px;
		text-align: center;
		/* background-color: #fbfcff; */
		background-color: #282828;
	}

	.qr-code {
		width: 376px;
		height: 487px;
		background-color: #fbfcff;
		position: absolute;
		top: 200px;
		right: 300px;
		z-index: 999;
	}

	.qr-code img {
		border-radius: 25px;
	}

	.slogan {
		position: absolute;
		top: 300px;
		left: 300px;
		z-index: 999;
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
