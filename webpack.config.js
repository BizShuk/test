var path = require('path');

var js_path   = path.resolve(__dirname,'./js'),
    jsx_path  = path.resolve(__dirname,'./jsx'),
    sass_path = path.resolve(__dirname,'./sass');
//    react_path= path.resolve(__dirname, 'node_modules/react/dist/react.min.js');
 


module.exports = {
    entry: {
        todo: './todo.js'
        // others
        // react is treated like a module
//        vendors: ['react']
    },

    output: {
        // [name] => use entry key for each entry
        // [hash]
        // [chunkhash]
        filename: '[name].js',      // output filename
        path: js_path // output dir
    },
    module: {
        loaders: [
            {   test: /\.js[x]?$/,  exclude: ['node_modules'],  loader: 'babel' , 
                query:{ presets:['es2015','react'] } 
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
//      no scan this module
//        noParse: [react_path]

    },
    resolve: {
        extensions: ['','.js','.jsx','.json']
//        alias: {
//            'react': react_path
//        }
    },
    plugins: [] // [list of plugin](https://webpack.js.org/plugins)
}

