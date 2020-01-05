const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const utils = require('./utils');


module.exports = (_env) => {

    const extractCSS = new ExtractTextPlugin({
        disable: _env === utils.production,
        filename: `${utils.resourcePath}/[name].css?[hash]`
    });

    return {
        entry: utils.getEntry(_env),
        output: {
            path: utils.getABSPath('dist'),
            filename: `${utils.resourcePath}/[name].bundle.js?[hash]`
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
                    use: extractCSS.extract({
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
                    // loaders: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|jpeg|svg|gif)$/,
                    loader: 'url-loader',
                    options: {
                        name: `${utils.resourcePath}/images/[name].[ext]?[hash]`,
                        limit: 1024 * 8 // 8kb以下不产生图片文件
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
            new CleanWebpackPlugin(),
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
            }),
            // 引用全局第三方变量
            new webpack.ProvidePlugin({
                "_": "lodash",
                "$": "jquery",
                "jquery": "jquery"
            }),
            extractCSS
        ],
        resolve: {
            // 路径别名
            alias: {

            }
        }
    };
}
