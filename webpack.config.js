var webpack = require('webpack');
var path = require('path');                 //引入node的path库

var config = {
    entry: ['webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        'webpack-dev-server/client?http://localhost:3001',
        './app/entry.js'],                //入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),  // 指定编译后的代码位置为 dist/bundle.js
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}

module.exports = config;