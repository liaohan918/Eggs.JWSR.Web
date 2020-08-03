<template>
	<div id="Profile" align="center">
		<!-- 头像 -->
		<div class="head-portrait">
			<img :src="headProtrait" />
		</div>
		<!-- 昵称 -->
		<div class="Nickname" align="center">
			{{Nickname}}
		</div>
		<!-- 标签 -->
		<div class="tag" align="center">
			<i class="el-icon-location">{{city}}</i>
			<span class="icon iconfont icon-gongzhonghao"></span>
			<span class="icon iconfont icon-qq"></span>
		</div>
		<!-- 自我介绍 -->
		<div class="introduce" align="left">
			<p>{{introduce}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Profile",
		props: {
			headProtrait: {
				type: String,
				default: ""
			},
			Nickname: {
				type: String,
				default: '甲午山人'
			},
			city: {
				type: String,
				default: '南宁'
			},
			introduce: {
				type: String,
				default: "这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍这里是一段自我介绍"
			}
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
	#Profile {
		/* width: 200px; */
		padding: 5px 10px 20px 10px;
	}

	.head-portrait img {
		border-radius: 50%;
		width: 150px;
		height: 150px;
	}

	.Nickname {
		margin: 10px 0px;
		font-size: 18px;
	}
	.tag i{
		margin-right: 10px;
	}
	.tag span{
		margin: 0px 5px;
	}
	.introduce{
		margin-top: 15px;
		margin-left: 5px;
		margin-right: 5px;
	}
</style>
