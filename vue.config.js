module.exports = {
	configureWebpack: config => {
		config.resolve.alias['cnolib$'] = '../../public/index.umd.min.js';
		// if (process.env.NODE_ENV === 'production') {
		//   // mutate config for production...
		// } else {
		//   // mutate for development...
		// }
	}
};