<template>
	<div id="Article">
		<!-- 轮播图 -->
		<div class="swiper">
			<swiper ref="mySwiper" :options="swiperOptions">
				<swiper-slide>
					<div class="swiper-content">
						<img src="../../../../public/swiper/Article/banner7.png" alt="">
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="swiper-content">
						<img src="../../../../public/swiper/Article/banner8.png" alt="">
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<!-- 核心部分 -->
		<div class="container-main">
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
				<profile class="profile" :Nickname="profile.NickName" :city="profile.city" :introduce="profile.introduce" :headProtrait="profile.headProtrait"></profile>
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
	import Profile from './profile.vue'
	import ArticleItem from './ArticleItem.vue'

	export default {
		name: "Article",
		components: {
			Swiper,
			SwiperSlide,
			Profile,
			ArticleItem
		},
		directives: {
			swiper: directive
		},
		props: {},
		data() {
			return {
				swiperOptions: { //轮播图属性
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true, //无线轮播
					autoplay: {
						delay: 6000 //6秒滚动一次
					}
				},
				profile: {
					headProtrait: '/img/homebg.jpg',
					NickName: "甲午山人",
					city: '南宁',
					introduce: '这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍'
				},
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
						imgSrc: "/img/homebg.jpg",
						isTop: true,
						tag: "" //标签	
					},
					{
						title: "标题3",
						content: "正文内容3",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "/img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					},
					{
						title: "标题4",
						content: "正文内容4",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "/img/homebg.jpg",
						isTop: false,
						tag: "杂谈" //标签	
					},
					{
						title: "标题5",
						content: "正文内容5",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "/img/homebg.jpg",
						isTop: false,
						tag: "教程" //标签	
					},
					{
						title: "标题6",
						content: "正文内容6",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "/img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					},
					{
						title: "标题7",
						content: "正文内容7",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "/img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					},
					{
						title: "标题8",
						content: "正文内容8",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "/img/homebg.jpg",
						isTop: false,
						tag: "教程" //标签	
					},
					{
						title: "标题9",
						content: "正文内容9",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "/img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					},
					{
						title: "标题10",
						content: "正文内容10",
						url: "#",
						publicationDate: "2020年08月03日",
						visits: 9999,
						imgSrc: "/img/homebg.jpg",
						isTop: false,
						tag: "随笔" //标签	
					}
				]
			}
		},
		computed: {
			totalContent() {
				return this.contentList.length
			}
		},
		methods: {
			onSubmit() {
				this.$emit('onSearch', this.searchForm.query)
			}
		},
		mounted() {

		},
		beforeRouteEnter(to, from, next){
			next()					
		}
	}
</script>
<style scoped>
	/* .swiper {
		margin-top: 85px;
	} */

	.swiper img {
		width: 100%;
		height: 475px;
	}

	.container-main {
		display: flex;
		padding: 0px 351px;
		overflow: hidden;
	}

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

	.pageNavigation {
		padding: 10px 15px;
	}
</style>
