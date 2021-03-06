const webpack = require('webpack')

module.exports = {
    entry: './source/index.jsx',
    output:{
        path: __dirname+'/public',
        filename: './bundle.js'
    },
    devServer:{
        port:8321,
        contentBase: './public'

    },
    resolve:{
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
            presets: ['es2015', 'react']
            }
        }]
    }
}