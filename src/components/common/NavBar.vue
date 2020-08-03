<template>
	<div id="NavBar">
		<el-row>
			<el-col :md="4">
				<div class="top-logo" @click="toRoute(0)">
					<img src="~assets/logo.png" style="width: 38px; height: 38px" /><a style="color: #333333 ">{{title}}</a>
				</div>
			</el-col>
			<el-col :md="12">
				<div class="top-nav">
					<el-link v-for="(item,index) in links" :key="index" @click.native="toRoute(index)">
						<a :style="{ 'color': index == activeIndex ? '#1296DB' : '#333333'}">{{item.text}}</a>
					</el-link>
				</div>
			</el-col>
			<el-col :md="6">
				<div class="search" align="right">
					<el-input v-model="query" placeholder="请输入搜索内容" @keyup.enter.native="onQuery">
						<i slot="prefix" class="el-input__icon el-icon-search"></i>
					</el-input>
				</div>
			</el-col>
			<el-col :md="2">
				<div class="top-write">
					<el-button type="primary">写文章</el-button>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name: "NavBar",
		props: {
			title: {
				type: String,
				default: "甲午山人"
			},
			links: {
				type: Array,
				default: []
			},
			currentIndex: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				query: '',//查询框内容
				activeIndex: 0
			}
		},
		methods: {
			toRoute(index) {
				this.activeIndex = index
				this.$emit('toRoute', this.links[index].route)
			},
			onQuery() {
				this.$emit('onQuery', this.query)
			}
		},
		created() {
			this.activeIndex = this.currentIndex
		}
	}
</script>
<style scoped>
	.top-logo {
		display: flex;
		align-items: center;
		font-family: "PingFang SC";
		font-size: 25px;
	}

	.top-logo img {
		margin-right: 20px;
	}

	/* 顶部右侧导航 */
	.top-nav {
		margin-top: 10px;
	}

	.top-nav a {
		font-family: "PingFang SC";
		font-size: 18px;
		margin-left: 20px;
	}

	.top-write button {
		float: right;
	}
</style>
