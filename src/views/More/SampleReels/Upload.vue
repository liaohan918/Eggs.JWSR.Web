<template>
	<div id="Upload">
		<el-row class="warp">
			<el-col :span="24" class="warp-main">
				<el-form :model="form" :rules="rules" label-width="80px" ref="infoForm">
					<el-form-item label="标题" prop="title">
						<el-input v-model="form.title"></el-input>
					</el-form-item>
					<el-form-item label="分类" prop="catagory">
						<el-select v-model="form.catagory" placeholder="请选择分类">
							<el-option label="国画" value="国画"></el-option>
							<el-option label="书法" value="书法"></el-option>
							<el-option label="油画" value="油画"></el-option>
							<el-option label="其它" value="其它"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="介绍" prop="introduce">
						<el-input type="textarea" :autosize="{ minRows: 4, maxRows: 10}" placeholder="请输入内容" v-model="form.introduce">
						</el-input>
					</el-form-item>
					<el-form-item>
						<el-upload ref="upload" class="upload-demo" drag :action="uploadUrl" multiple :on-success="handleUploadSuccess" list-type="picture"
						 :on-error="handleUploadError">
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
							<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过10M，只能上传一张图</div>
						</el-upload>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="onSubmit">确认提交</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name: "Upload",
		data() {
			return {
				form: {
					title: "", //标题
					catagory: "", //分类
					introduce: "", //介绍
					imgaddress: ""//图片路径
				},
				fileList: [],
				rules: {
					title: [{
						required: true,
						message: "请输入标题",
						trigger: 'blur'
					}],
					catagory: [{
						required: true,
						message: "请选择类别",
						trigger: 'blur'
					}]
				},
				uploadUrl: "",
				imgUploadSuccess: false
			}
		},
		methods: {
			handleUploadSuccess(response, file, fileList) {
				if (!response.success) {
					this.$message.error({
						message: response.resultMsg,
						offset: 200
					})
					return
				}
				console.log("上传成功")
				console.log(response)
				this.form.imgaddress = response.completeFilePath
				this.$message({
					message: response.resultMsg,
					offset: 200,
					type: 'success'
				});
				this.imgUploadSuccess = true
			},
			handleUploadError(response, file, fileList) {
				this.$message.error({
					message: response.resultMsg,
					offset: 200
				})
			},
			onSubmit() {
				if(!this.imgUploadSuccess){
					this.$message.error({
						message: "请先上传图片",
						offset: 200
					})
					return
				}
				//提交
				this.$refs.infoForm.validate(valid => {
					if (valid) {
						console.log(this.form);
						var postPara = this.form;
						this.$api.basePost("SampleReels/SampleReel/upload", postPara, r => {
							if (r.success) {
								this.$message({
									message: r.msg,
									offset: 200,
									type: 'success'
								});
								this.$refs.infoForm.resetFields()
								this.$refs.upload.clearFiles()
							} else {
								this.$message.error({
									message: r.msg,
									offset: 200
								})
							}
						});
					}
				});
			}
		},
		created() {
			this.uploadUrl = this.$store.state.uploadUrl
		},
		mounted() {}
	}
</script>
<style scoped>
	.warp {
		background: #fff;
		padding-top: 20px;
		width: 75%;
		margin: 0 auto;
	}

	.el-form {
		padding-right: 80px !important;
	}
</style>
