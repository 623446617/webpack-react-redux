const webpack = require('webpack');
const {CleanWebapckPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./utils');

module.exports = (_env) => {
    return {
        entry: utils.getEntry(_env),
        output: {
            path: utils.getABSPath('dist'),
            filename: `${utils.resourcePath}/[name].bundle.js`
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    },
                    include: utils.getABSPath('src'),
                    exclude: utils.getABSPath('node_modules')
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|jpeg|svg|gif)$/,
                    loader: 'url-loader',
                    options: {
                        name: `${utils.resourcePath}/images/[name].[ext]?[hash]`,
                        limit: 10000
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loader: 'file-loader',
                    options: {
                        name: `${utils.resourcePath}/fonts/[name].[ext]?[hash]`
                    }
                },
                {
                    test: /\.(mp4|ogg)$/,
                    loader: 'file-loader'
                }
            ]
        },
        plugins: [
            new CleanWebapckPlugin(),
            new HtmlWebpackPlugin({
                inject: 'body',
                title: 'webpack-react-redux',
                filename: "index.html",
                template: utils.getABSPath('src/index.html'),
                minify: {
                    // 移除HTML中注释
                    removeComments: _env === utils.production,
                    // 移除空行和换行符
                    collapseWhitespace: _env === utils.production,
                    // 压缩内联CSS
                    minifyCSS: _env === utils.production
                }
            })
        ]
    };
}