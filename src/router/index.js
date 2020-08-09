import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'
import store from "../store/index.js";

const More = () => import('views/More.vue')
const Article = () => import('views/More/Article/Article.vue')
const SampleReels = () => import('views/More/SampleReels/SampleReels.vue')
const LoginCallbackView = () => import('views/LoginCallbackView.vue')
const ArticleDetail = () => import('views/More/Article/ArticleDetail.vue')
const Editor = () => import('views/More/Article/Editor.vue')

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/callback',
		name: 'callback',
		component: LoginCallbackView,
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/More',
		name: 'More',
		component: More,
		meta: {
			keepAlive: false
		},
		children: [{
				path: '',
				redirect: 'Article'
			},
			{
				path: 'Article',
				name: 'Article',
				component: Article,
				meta: {
					keepAlive: true
				}
			},
			{
				path: 'SampleReels',
				name: 'SampleReels',
				component: SampleReels,
				meta: {
					keepAlive: true
				}
			},
			{
				path: 'ArticleDetail/:id',
				name: 'ArticleDetail',
				component: ArticleDetail,
				meta:{
					keepAlive: true
				}
			},
			{
				path: 'Editor',
				name: "Editor",
				component: Editor
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

var storeTemp = store;
router.beforeEach((to, from, next) => {
	if (!storeTemp.state.token) {
		storeTemp.commit("saveToken", window.localStorage.Token);
	}
	if (to.meta.requireAuth) {
		// 判断该路由是否需要登录权限
		if (storeTemp.state.token) {
			// 通过vuex state获取当前的token是否存在
			next();
		} else {
			applicationUserManager.login();
		}
	} else {
		next();
	}
});

export default router
