//live-server, lodash, browserify
//Steps to work:
//  npm install -g live-server
//  npm install lodash
//  npm install - g browserify
//  browserify indexLodash.js > bundle.js // (sk¹d > dok¹d)
//  live - server

//import { without } from 'lodash';
var _ = require('lodash');
//console.log(_);

var array = [1, 2, 3, 4, 5, 6];
console.log(_.without(array, 3));