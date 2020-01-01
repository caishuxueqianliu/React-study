const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
	// ����Ϊ����ģʽ
    mode: 'development',
    devtool: 'inline-source-map',
    // ���÷����Ŀ¼�Ͷ˿�
    devServer: {
        contentBase: './dist',
        port: 3000
    }
});

