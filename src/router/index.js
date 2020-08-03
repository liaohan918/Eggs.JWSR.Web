import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'

const More = () => import('views/More.vue')
const Article = () => import('views/More/Article/Article.vue')
const SampleReels = () => import('views/More/SampleReels/SampleReels.vue')

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
		path: '/More',
		name: 'More',
		component: More,
		meta: {
			keepAlive: false
		},
		children: [
			{
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
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
