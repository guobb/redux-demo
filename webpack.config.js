let path = require('path');
let webpack = require('webpack');

module.exports = {
    devtool: "cheap-module-eval-sourse-ma[",
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.optimize.OccurrentOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
};