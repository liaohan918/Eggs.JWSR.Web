import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		baseUrl: "http://127.0.0.1:9070",
		formDatas: null,
		uploadUrl: "http://127.0.0.1:9070/SampleReels/FileUpload/FormSingleFileUpload",//图片上传路径
		sampleReelImgServices: "http://127.0.0.1:9000",//MinIO地址
		token: null, //token令牌
		client: {
			clientId: 'eggsjwsrweb',
			clientSecret: 'woaini123',
			grant_type: 'client_credentials'
		}
	},
	mutations: {
		getFormData(state, data) {
			state.formDatas = data;
		},
		saveToken(state, data) {
			state.token = data;
			window.localStorage.setItem("Token", data);
		}
	},
	actions: {},
	modules: {}
})
