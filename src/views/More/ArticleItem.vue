<template>
	<div id="ArticleItem" :class="isTop ? 'istop': 'common'">
		<!-- 上 -->
		<div class="top">
			<a :href="url">
				<div :class=" this.isTop? 'title-isTop':'title'">
					<span v-if="isTop">[置顶]</span>
					<span v-else>
						<el-tag type="success">{{tag}}</el-tag>
					</span>
					{{title}}
				</div>
			</a>
		</div>
		<!-- 中 -->
		<div class="center">
			<!-- 封面 -->
			<div class="cover" v-if="imgSrc">
				<a :href="url"><img :src="imgSrc" alt=""></a>
			</div>
			<!-- 文章中文缩略 -->
			<div class="content">
				<p>{{content}}</p>
			</div>
		</div>
		<!-- 下 -->
		<div class="bottom">
			<a class="readAll" :href="url">[阅读全文]</a>
			<i class="el-icon-time">{{publicationDate}}</i>
			<i class="el-icon-view">{{visits}}</i>
		</div>
	</div>
</template>
<script>
	export default {
		name: "ArticleItem",
		props: {
			title: {
				type: String,
				default: "文章的标题"
			},
			content: {
				type: String,
				default: `文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文
				文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文章的正文文`
			},
			url: { //文章链接
				type: String,
				default: "#"
			},
			publicationDate: { //文章发表日期
				type: String,
				default: "2020年08月02日"
			},
			visits: { //访问量
				type: Number,
				default: 9999
			},
			imgSrc: {
				type: String,
				default: ""
			},
			isTop: true,
			tag: ""
		},
		data() {
			return {

			}
		},
		methods: {

		},
		mounted() {}
	}
</script>
<style scoped>
	#ArticleItem {
		/* position: relative; */
		padding: 5px 15px;
	}

	.istop {
		background-color: #eee;
		box-shadow: 10px 0px 0px 0px #5EB309 inset;
		border-bottom: 1px solid #828282;
	}
	
	.common{		
		box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
	}

	.title {
		font-size: 20px;
	}
	.title-isTop{
		font-size: 25px;
	}

	.center {
		display: flex;
	}

	.cover img {
		width: 270px;
		margin: 5px;
	}

	.content {
		font-size: 18px;
		margin-top: 15px;
		overflow: hidden;
		/*自动隐藏文字*/
		text-overflow: ellipsis;
		/*文字隐藏后添加省略号*/
		display: -webkit-box;
		-webkit-line-clamp: 5;
		/*想要显示的行数*/
		-webkit-box-orient: vertical;
	}

	.bottom {
		/* position: absolute; */
		/* bottom: 5px; */
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		/* margin-top: 10px; */
	}

	.bottom i {
		margin-right: 20px;
	}

	.bottom .readAll {
		align-self: flex-start;
		margin-right: 20px;
		color: #5EB309;
	}
</style>
