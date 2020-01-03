const webpack = require('webpack');
const merge =  require('webpack-merge');
const common = require('./webpack.com');
const utils = require('./utils');
const proxy = require('../proxy');

module.exports = (_env) => {

    return merge(common(_env), {
        mode: 'development',
        devtool: 'cheap-module-source-map',
        devServer: {
            hot: true,
            inline: true,
            open: true,
            host: utils.host,
            port: utils.port,
            contentBase: utils.getABSPath('dist'),
            proxy: proxy,
            overlay: {
                errors: true,
                warnings: true
            },
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
