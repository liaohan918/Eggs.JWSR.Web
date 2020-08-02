<template>
	<div id="More">
		<!-- 顶部导航栏 -->
		<div class="top">
			<div class="nav">
				<el-row>
					<el-col :xs="8" :md="4">
						<div class="top-logo">
							<img src="../assets/logo.png" style="width: 38px; height: 38px" /><a :style="{ color: navFontColor }">{{title}}</a>
						</div>
					</el-col>
					<el-col :xs="0" :md="2"><a style="color: transparent;">1</a></el-col> <!-- 用于做偏移，因为顶部导航栏是响应式,没使用offset -->
					<el-col :xs="12" :md="12">
						<div class="top-nav">
							<router-link :to="{path: '/'}">
								<el-link><a style="color: #333333;">首页</a></el-link>
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
	</div>
</template>
<script>
	export default {
		name: "More",
		data() {
			return {
				title: "甲午山人",
				activePageIndex: 1,//当前页面
			}
		},
		methods: {

		},
		mounted() {}
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
		box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
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
	.top-write button{
		float: right;
	}
</style>
