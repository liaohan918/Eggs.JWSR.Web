import store from "../store/index.js";
import router from "../router/index.js";
import applicationUserManager from "../auth/applicationusermanager";

// 配置API接口地址
var rootApi = store.state.baseUrl + "/api"//"http://127.0.0.1:9070/api";//测试本地，用CORS跨域

var baseUrl = store.state.baseUrl

// 引用axios
var axios = require("axios");
// 自定义判断元素类型JS
function toType(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
// 参数过滤函数
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key];
    }
    if (toType(o[key]) === "string") {
      o[key] = o[key].trim();
    } else if (toType(o[key]) === "object") {
      o[key] = filterNull(o[key]);
    } else if (toType(o[key]) === "array") {
      o[key] = filterNull(o[key]);
    }
  }
  return o;
}

// http request 拦截器
var storeTemp=store;
axios.interceptors.request.use(
  config => {
    console.log(config.params)
    if (storeTemp.state.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization ="Bearer "+ storeTemp.state.token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
			// 返回 401 清除token信息并跳转到登录页面
            store.commit("saveToken", "");
            window.localStorage.removeItem("USER_NAME");
            applicationUserManager.login();
      }
    }
    return Promise.reject(error.response.data); // 返回接口返回的错误信息
  }
);

function apiAxios(method, url, params, success, failure) {
  if (params) {
    params = filterNull(params);
  }
  axios({
    method: method,
    url: url,
    data: method === "POST" || method === "PUT" ? params : null,
    params: method === "GET" || method === "DELETE" ? params : null,
    baseURL: rootApi,
    // `headers` 是即将被发送的自定义请求头
    withCredentials: false
  })
    .then(function(res) {
      success(res.data);
    })
    .catch(function(err) {
      let res = err.response;
      if (err) {
        window.alert("api error, HTTP CODE: " + res.status);
      }
    });
}

function baseAxios(method, url, params, success, failure) {
  if (params) {
    params = filterNull(params);
  }
  axios({
    method: method,
    url: url,
    data: method === "POST" || method === "PUT" ? params : null,
    params: method === "GET" || method === "DELETE" ? params : null,
    baseURL: baseUrl,
    // `headers` 是即将被发送的自定义请求头
    withCredentials: false
  })
    .then(function(res) {
      success(res.data);
    })
    .catch(function(err) {
      let res = err.response;
	  console.log(err)
      if (err) {
        window.alert("api error, HTTP CODE: " + res.status);
      }
    });
}

// 返回在vue模板中的调用接口
export default {
  get: function(url, params, success, failure) {
    return apiAxios("GET", url, params, success, failure);
  },
  post: function(url, params, success, failure) {
    return apiAxios("POST", url, params, success, failure);
  },
  put: function(url, params, success, failure) {
    return apiAxios("PUT", url, params, success, failure);
  },
  delete: function(url, params, success, failure) {
    return apiAxios("DELETE", url, params, success, failure);
  },
  basePost(url, params, success, failure){
	  return baseAxios("POST", url, params, success, failure);
  },
  baseGet(url, params, success, failure){
	  return baseAxios("GET", url, params, success, failure);
  }
};