// Include CSS to be compiled
require('./assets/css/app.scss');

// Include custom class
var Class = require('./assets/js/Class');

// Include ES6 class
require('./assets/js/ES6');

// Call method in custom class
Class.test();

// App loaded
console.log('app loaded');

env = function(v) {
    return process.env[v];
};

console.log(env('MY_VARIABLE'));