// Used for external CSS file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Used to call custom shell commands before/after build
const WebpackShellPlugin = require('webpack-shell-plugin');

// .env.development.production.example
const Dotenv = require('dotenv-webpack');

module.exports = {
    // Include entry file(s)
    entry: ['./app/another_entry.js', './app/app.js'],

    // Output file
    output: {
        filename: 'app.js',
        path: __dirname + '/public'
    },
    module: {
        // Rules
        rules: [
            // SCSS
            {
                test: /\.scss$/,
                //loaders: ['style', 'css', 'sass'] // inline
                loader: ExtractTextPlugin.extract('css-loader!sass-loader') // external file
            },
            // ES6 files
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            // JSHint
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'jshint-loader'
            }
        ]
    },
    plugins: [
        // Export CSS to external file
        new ExtractTextPlugin({ filename: 'app.css', disable: false, allChunks: true }),

        // Execute commands before and after build
        new WebpackShellPlugin({
            onBuildStart:['echo "\033[1;33mWebpack Start\033[0m"'],
            onBuildEnd:['echo "\033[1;32mWebpack End\033[0m"'],
            onBuildExit:['echo "\033[1;37mWebpack Exit\033[0m"']
        }),
        new Dotenv({
            path: '.env.development'
        })
    ],
    // Resolve file extensions
    resolve: {
        extensions: ['.js', '.es6']
    },
    // Watch dev server
    watch: true
};