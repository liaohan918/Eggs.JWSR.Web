const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}
module.exports = {
	lintOnSave: false, //每次保存不进行eslint代码验证

	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('assets', resolve('src/assets'))
			.set('views', resolve('src/views'))
			.set('components', resolve('src/components'))
			.set('network', resolve('src/network'))
			.set('common', resolve('src/common'))
			.set('mixins', resolve('src/mixins'))
			.set('store', resolve('src/store'))
			.set('api', resolve('src/api'))
	},
	//publicPath: './' //设置打包后静态文件的引用路径。	
	devServer: {
		open: false, //配置自动启动浏览器
		host: "127.0.0.1",
		port: 8081, // 当前vue项目 端口号
		https: false,
		hotOnly: false, // https:{type:Boolean}
		proxy: {
			// 配置多个代理
			"/api": {
				target: "http://127.0.0.1:9070", //这里改成你自己的后端api端口地址，记得每次修改，都需要重新build
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					// 路径重写，
					"^/apb": "" // 替换target中的请求地址
				}
			},
			"/images": {
				target: "http://192.168.50.1:8000"
			}
		}
	}
};
