const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.com');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (_env) => {
    return merge(common(_env, {
        mode: 'production',
        plugins: [
            new UglifyjsPlugin()
        ]
    }));
}
