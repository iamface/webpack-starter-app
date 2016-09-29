// Used for external CSS file
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Used to call custom shell commands before/after build
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    // Include entry file(s)
    entry: ['./app/another_entry.js', './app/app.js'],

    // Output file
    output: {
        filename: './public/app.js'
    },
    module: {
        // Preloaders
        preLoaders: [
            // JSHint
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],

        // Loaders
        loaders: [
            // SCSS
            {
                test: /\.scss$/,
                //loaders: ['style', 'css', 'sass'] // inline
                loader: ExtractTextPlugin.extract('css!sass') // external file
            },
            // ES6 files
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        // Export CSS to external file
        new ExtractTextPlugin('./public/app.css', {
            allChunks: true
        }),

        // Execute commands before and after build
        new WebpackShellPlugin({
            onBuildStart:['echo "\033[1;33mWebpack Start\033[0m"'],
            onBuildEnd:['echo "\033[1;32mWebpack End\033[0m"'],
            onBuildExit:['echo "\033[1;37mWebpack Exit\033[0m"']
        })
    ],
    // Resolve file extensions
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    // Watch dev server
    watch: true
};