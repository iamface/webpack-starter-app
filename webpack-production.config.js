// Load strip loader
var WebpackStripLoader = require('strip-loader');

// Include base config
var devConfig = require('./webpack.config.js');

// Strip 'console.log' from files
var stripLoader = {
    test: [/\.js$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log')
};

// Include stripped files
devConfig.module.loaders.push(stripLoader);

// Use base config
module.exports = devConfig;