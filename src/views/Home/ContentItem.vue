<template>
    <div id="ContentItem">	
		<a :href="url"><img :src="src" alt=""></a>
		<div class="bottom">
			<div class="bottom-item title">{{title}}</div>
			<div class="bottom-item info">				
				<div class="bottom-item-i bottom-item-left">
					<i class="el-icon-view">&nbsp{{visits}}</i>
				</div>
				<div class="bottom-item-i bottom-item-right">
					<i class="el-icon-share">&nbsp{{forwardingVolume}}</i>
				</div>
				<div class="bottom-item-i bottom-item-right">
					<i class="el-icon-edit-outline">&nbsp{{comments}}</i>
				</div>
				<div class="bottom-item-i bottom-item-right">
					<span class="icon iconfont icon-dianzan">&nbsp{{likes}}</span>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
   name: "ContentItem",
   props:{
       url: {
		   type: String,
		   default: ""
	   },//超链接路径
	   src: {
		   type: String,
		   default: ""
	   },//图片路径
	   title: {
		   type: String,
		   default: "文章标题"
	   },//文章标题
	   visits: {
		   type: Number,
		   default: 99999
	   },//访问量
	   likes: {
		   type: Number,
		   default: 99999
	   },//点赞量
	   comments: {
		   type: Number,
		   default: 99999
	   },//评论数
	   forwardingVolume: {
		   type: Number,
		   default: 99999
	   }//转发数
   },
   data() {
      return {

      }
   },
	methods:{

	},
	mounted() {
   	}
}
</script>
<style scoped>
	#ContentItem{
		position: relative;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.bottom{
		position: absolute;
		width: 100%;
		/* border: 1px solid #666666; */
		bottom: 10px; 
		padding: 0px 30px;
		color: #F5F6F9;
	}
	.bottom-item{
		margin: 15px 0px;
	}
	.bottom-item-i{
		margin: 0px 5px;
	}
	.title{
		font-size: 20px;
	}
	
	.bottom-item-left{
		float: left;
	}
	.bottom-item-right{
		float: right;
	}
</style>