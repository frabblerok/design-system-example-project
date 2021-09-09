module.exports = {
	configureWebpack: config => {
		config.resolve.alias['rbcwmlib$'] = '@rbc-dsse/framework-library-vue/dist/index.umd.min.js';
		// if (process.env.NODE_ENV === 'production') {
		//   // mutate config for production...
		// } else {
		//   // mutate for development...
		// }
	}
};