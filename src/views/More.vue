<template>
	<div id="More">
		<!-- 顶部导航栏 -->
		<div class="top">
			<div class="nav">
				<el-row>
					<el-col :xs="8" :md="4">
						<div class="top-logo">
							<img src="../assets/logo.png" style="width: 38px; height: 38px" /><a style="color: #333333 ">{{title}}</a>
						</div>
					</el-col>
					<el-col :xs="12" :md="14">
						<div class="top-nav">
							<router-link :to="{path: '/'}">
								<el-link><a style="color: #333333">首页</a></el-link>
							</router-link>
							<router-link :to="{path: '/More/Article'}">
								<el-link><a style="color: #1296DB">文章</a></el-link>
							</router-link>
							<router-link :to="{path: '/More/SampleReels'}">
								<el-link><a style="color: #333333">作品集</a></el-link>
							</router-link>
						</div>
					</el-col>
					<el-col :xs="4" :md="6">
						<div class="top-write">
							<el-button type="primary">写文章</el-button>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
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
			<!-- 核心部分 -->
			<div class="container-main">
				<!-- 导航栏 -->
				<!-- <div class="container-main-navigation" :class="ScrollOverSwiper? 'container-main-navigation-stop' : ''">					
					
				</div> -->
				<!-- 左侧部分，文章列表 -->
				<div class="container-main-left">
					<p style="font-size: 20px;">最近更新</p>
					<article-item class="topItem" v-for="(item, index) in contentList" :key="index" :title="item.title" :content="item.content"
					 :url="item.url" :visits="item.visits" :publicationDate="item.publicationDate" :imgSrc="item.imgSrc" :isTop="item.isTop"
					 :tag="item.tag"></article-item>
					<!-- 页码导航 -->
					<div align="center" class="pageNavigation">
						<el-pagination background layout="prev, pager, next" :total="totalContent">
						</el-pagination>
					</div>
				</div>
				<!-- 右侧其它信息 -->
				<div class="container-main-right">
					<profile class="profile" :Nickname="profile.NickName" :city="profile.city" :introduce="profile.introduce"></profile>
					<div class="search">
						<p style="font-size: 22px;">站内搜索</p>
						<el-form :inline="true" :model="searchForm" class="demo-form-inline">
							<el-form-item>
								<el-input v-model="searchForm.query" placeholder="请输入搜索内容"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="onSubmit">查询</el-button>
							</el-form-item>
						</el-form>
					</div>
				</div>
			</div>
		</div>
		<!-- 底部声明 -->
		<div class="footer">
			<p>备案号:XXXXXXXX</p>
		</div>	
		<!-- 左侧导航栏 -->
		<div :class="ScrollOverSwiper ? 'navigation-fixed' : 'navigation'">
			<el-row class="tac">
			  <el-col>
			    <el-menu
			      default-active="1"
			      class="el-menu-vertical-demo">
			      <el-menu-item v-for="(item,index) in classify" :key="index" :index="item.index" >
			        <span slot="title">{{item.text}}</span>
			      </el-menu-item>
			    </el-menu>
			  </el-col>		  
			</el-row>
		</div>	
		<el-backtop :visibility-height="600" :right="100" :bottom="100">
			<div class="backtop">
				UP
			</div>
		</el-backtop>
	</div>
</template>
<script>
	import {
		Swiper,
		SwiperSlide,
		directive
	} from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'
	import ArticleItem from './More/ArticleItem.vue'
	import Profile from './More/profile.vue'

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
				activePageIndex: 1, //当前页面
				contentList: [ //指定文章列表
					{
						title: "标题1",
						content: "正文内容1",
						url: "#",
						publicationDate: "2020年08月02日",
						visits: 999,
						imgSrc: "",
						isTop: true, //是否置顶
						tag: "" //标签
					},
					{
						title: "标题2",
						content: "正文内容2",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "img/homebg.jpg",
						isTop: true,
						tag: "" //标签	
					},
					{
						title: "标题3",
						content: "正文内容3",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					},
					{
						title: "标题4",
						content: "正文内容4",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "img/homebg.jpg",
						isTop: false,
						tag: "杂谈" //标签	
					},
					{
						title: "标题5",
						content: "正文内容5",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "img/homebg.jpg",
						isTop: false,
						tag: "教程" //标签	
					},
					{
						title: "标题6",
						content: "正文内容6",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					},
					{
						title: "标题7",
						content: "正文内容7",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					},
					{
						title: "标题8",
						content: "正文内容8",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "img/homebg.jpg",
						isTop: false,
						tag: "教程" //标签	
					},
					{
						title: "标题9",
						content: "正文内容9",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					},
					{
						title: "标题10",
						content: "正文内容10",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					}
				],
				profile: {
					NickName: "甲午山人",
					city: '南宁',
					introduce: '这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍'
				},
				totalContent: 10, //文章总数
				searchForm: {
					query: ''
				},
				classify:[
					{
						text: "最新",
						index: "1"//index值要是字符串
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
				ScrollOverSwiper: false//轮播图是否离开界面
			}
		},
		components: {
			Swiper,
			SwiperSlide,
			ArticleItem,
			Profile
		},
		directives: {
			swiper: directive
		},
		methods: {
			onSubmit(){
				console.log("查询成功")
			},
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
				let offsetTop = 580 // 轮播图的高度+顶部导航栏的高度
				if (scrollTop > offsetTop) {
					this.ScrollOverSwiper = true
				} else {
					this.ScrollOverSwiper = false
				}
			
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>
<style scoped>
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

	.top-write button {
		float: right;
	}

	.swiper {
		margin-top: 85px;
	}

	.swiper img {
		width: 100%;
		height: 475px;
	}

	.container {
		margin-bottom: 20px;
	}

	.container-main {
		display: flex;
		padding: 0px 351px;
		overflow: hidden;
	}
	/* .container-main-navigation{
		padding-top: 25px;
		flex: 0.4;
	} */
	/* 固定在页面 */
	/* .container-main-navigation-stop{
		position: fixed;
		top: 700px;
	} */

	.container-main-left {
		flex: 3;
		margin-right: 15px;
	}

	.container-main-left p {
		margin: 10px 0px;
	}

	.topItem {
		margin: 10px 0px;
	}

	.container-main-right {
		padding-top: 10px;
		flex: 1;
	}

	.profile {
		width: 100%;
		background-color: #eee;
	}

	.search {
		margin-top: 25px;
	}
	
	.search p{
		margin-bottom: 20px;
	}

	.pageNavigation {
		padding: 10px 15px;
	}

	.footer {
		padding: 100px 361px;
		text-align: center;
		background-color: #282828;
	}
	
	.navigation{
		position: absolute;
		top: 590px;
		left: 250px;
		width: 100px;
	} 
	
	.navigation-fixed{
		position: fixed;
		top: 65px;
		left: 250px;
		width: 100px;
	}
	
	.el-menu-vertical-demo{
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
</style>
