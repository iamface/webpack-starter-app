// Load strip loader
var WebpackStripLoader = require('strip-loader');

// Include base config
var devConfig = require('./webpack.config.js');

// .env.development.production.example
const Dotenv = require('dotenv-webpack');

// Strip 'console.log' from files
let stripLoader = {
    test: [/\.js$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log')
};

// Include stripped files
devConfig.module.loaders.push(stripLoader);

// Use production .env.production
let env = new Dotenv({
    path: '.env.production'
});
devConfig.plugins.pop();
devConfig.plugins.push(env);

// Use base config
module.exports = devConfig;