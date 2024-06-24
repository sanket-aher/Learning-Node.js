/* Exports in Directories : 1)Always index.js is entry point for exports if we have multiple files of JS.  */

const apple = require('./apple');
const mango = require('./mango');

let fruits = [apple,mango];
module.exports = fruits;