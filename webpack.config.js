var path = require('path');

var js_path   = path.resolve(__dirname,'./js');
var jsx_path  = path.resolve(__dirname,'./jsx');
var sass_path = path.resolve(__dirname,'./sass');



module.exports = {
    entry: {
        todo: './todo.js'
        // others
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
            }
        ]

    },
    resolve: {
        extensions: ['','.js','.jsx','.json']
    },
    plugins: [] // [list of plugin](https://webpack.js.org/plugins)
}

