import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  appSys: "APPSYS",
	  baseUrl: "http://183.60.111.155:43244/api/",
	  spUrl: "SYSApi/esp",
	  outerNetUrl: "http://183.60.111.155:43244/api/",//新络10.6.0.92:8080的公网IP
	  interNetUrl: "http://10.6.0.92:8080/api/",//内网IP
	  userInfo: {
		  userId: "admin",
		  userName: "管理员",
		  company: "SNMES",//账套
		  companyName: "新络MES",//账套名称
		  language: "zh-cn"
	  },
	  sysMenu: {}//系统模块信息
  },
  mutations: {
	  setBaseUrl(state,payload){
		  state.baseURL = payload
	  },
	  setUserInfo(state,payload){
		  state.userInfo.userId = payload.userId ? payload.userId : state.userInfo.userId
		  state.userInfo.userName = payload.userName ? payload.userName : state.userInfo.userName
		  state.userInfo.language = payload.language ? payload.language : state.userInfo.language
		  state.userInfo.company = payload.company ? payload.company : state.userInfo.company
		  state.userInfo.companyName = payload.companyName ? payload.companyName : state.userInfo.companyName
	  },
	  setSysMenu(state,payload){
		  state.sysMenu = payload
	  }
  },
  actions: {
  },
  modules: {
  }
})
