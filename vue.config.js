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
	},
	//publicPath: './' //设置打包后静态文件的引用路径。	
};
