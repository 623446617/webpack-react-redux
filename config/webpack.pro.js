const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.com');

/*
* 注：webpack4更新后，内置了uglifyjs-webpack-plugin插件，
* 当mode值为'production'(mode默认值)时，默认压缩文件，
* 所以在plugins中，不用引用压缩插件
* */

module.exports = (_env) => {
    return merge(common(_env, {
        mode: 'production',
        devtool: 'cheap-module-source-map',
    }));
}
