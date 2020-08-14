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
				<article-item class="topItem" v-for="(item, index) in contentList" :key="index" :id="item.bID" :title="item.btitle" :content="item.bRemark"
				 :url="item.url" :visits="item.btraffic" :publicationDate="item.publicationDate" :isTop="item.isTop" :tag="item.bcategory" :fullText="item.bcontent"></article-item>
				<!-- 页码导航 -->
				<div align="center" class="pageNavigation">
					<el-pagination ref="pageination" background layout="prev, pager, next" :total="totalContent" @current-change="currentPageChange">
					</el-pagination>
				</div>
			</div>
			<!-- 右侧其它信息 -->
			<div class="container-main-right">
				<profile class="profile" :Nickname="profile.NickName" :city="profile.city" :introduce="profile.introduce"
				 :headProtrait="profile.headProtrait"></profile>
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
				totalContent: 10, //文章总数
				contentList: []//指定文章列表
			}
		},
		computed: {

		},
		methods: {
			onSubmit() {
				this.$emit('onSearch', this.searchForm.query)
			},
			//根据类型和页码获取博客列表
			getContentList(bcategory, page, pageSize, func){
				console.log(`查询第${page}页博客列表`)
				this.$api.get("Blog", {
					bcategory: bcategory,
					page: page,
					pageSize: pageSize
				}, r => {
					this.totalContent = r.response.dataCount
					this.contentList = r.response.data
					this.$bus.$emit('reloadContent')
					if(func)
						func(r)
				});
			},
			//页码变更
			currentPageChange(page){
				console.log("页码变更:"+ page)
				let pageSize = this.$refs.pageination.pageSize
				this.getContentList('', page, pageSize, ()=> {
					//返回顶部
					//console.log("回到顶部")
					window.scrollTo(0,0)
				})
			}
		},
		beforeCreate() {			
			this.$bus.$on("onCatagoryChange", payload => {//注册类别变更事件
				console.log(`路由页面：${payload.routeName},类别变更,变更的类别:${payload.catagory}`)
				if(payload.routeName != "Article")
					return
				let catagory = payload.catagory
				let pageSize = this.$refs.pageination.pageSize
				// console.log(this.$refs.pageination)
				if(catagory == "最新")
					catagory = ''
				this.getContentList(catagory, 1, pageSize, ()=> {
					//返回顶部
					//console.log("回到顶部")
					window.scrollTo(0,0)
				})
			})
		},
		mounted() {
			let page = this.$refs.pageination.currentPage
			let pageSize = this.$refs.pageination.pageSize
			// console.log(this.$refs.pageination)
				console.log(`DOM元素渲染完成`)
			this.getContentList('', page, pageSize)
		},
		beforeRouteEnter(to, from, next) {
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
