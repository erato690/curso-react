const webpack = require('webpack')

module.exports = {
    entry: './source/index.js',
    output:{
        path: __dirname+'/public',
        filename: './bundle.js'
    },
    devServer:{
        port:8321,
        contentBase: './public'

    }
}