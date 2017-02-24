// Load strip loader
const WebpackStripLoader = require('strip-loader');

// Babili plugin to compress production
const BabiliPlugin = require('babili-webpack-plugin');

// Include base config
const devConfig = require('./webpack.config.js');

// .env.development.production.example
const Dotenv = require('dotenv-webpack');

// Strip 'console.log' from files
const stripLoader = {
    test: [/\.js$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log')
};

// Babili plugin
let babili = new BabiliPlugin();

// Include stripped files
devConfig.module.loaders.push(stripLoader);

// Use production .env.production
let env = new Dotenv({
    path: '.env.production'
});
devConfig.plugins.pop();
devConfig.plugins.push(env);

// Include Babili plugin
devConfig.plugins.push(babili);

// Use base config
module.exports = devConfig;