<template>
	<div id="PictureItem">
		<div class="picture-item-img">
			<img :src="src" alt="">
		</div>		
		<div class="picture-item-text">
			<p>{{text}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: "PictureItem",
		props: {
			src: {
				type: String,
				default: ""
			},
			text: {
				type: String,
				default: "国画"
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
	#PictureItem {
		position: relative;
	}
	.picture-item-img{
		width: 100%;
		height: 100%;
		padding-bottom: 35px;
	}
	
	img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	
	img:hover {
		box-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
	}

	.picture-item-text {
		width: 100%;
		position: absolute;
		bottom: 5px;
		text-align: center;
	}
</style>
