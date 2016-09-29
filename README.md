## Webpack App ##

This is a base repository for starting a new Webpack application.

It will compile Javascript and CSS (SCSS) files into one of each that can be included in the index.html file.

This project includes:
* Bootstrap 4 (alpha) - CDN
* Custom SCSS compilation
  * It uses `extract-text-webpack-plugin` to create a single .css file, but can add your CSS inline instead if you prefer.
* Custom JS classes (ES5 and/or ES6) - `babel-preset-es2015`

#### To begin: #####

`$ npm install`

This will install everything needed to begin your application. *CDN links to **Bootstrap** have been added instead 
of npm modules since not every application will need them, and can more easily be removed.
****
#### To build dev: ####

`$ npm run dev`

This will start a new local web server using `webpack-dev-server` at **http://localhost:8080**.
Since the application files exist in **/app** and the build files in **/public**, you will need to direct to
**http://localhost:8080/public** to see your application.

It will run `jshint` and inform you of any syntax issues while you develop as well as hot reload your browser
as changes are made.
****
#### To build production: ####

`$ npm run build`

This will build your application for production. It will uglify your **/public/app.js** and **/public/app.css** files.
It will also strip any `console.log()` lines you have using `strip-loader`, so you can leave them for development.