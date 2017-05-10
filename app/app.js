import 'bootstrap';

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

// .env loaded
console.log(process.env.MY_VARIABLE);

// jquery loaded
console.log($);