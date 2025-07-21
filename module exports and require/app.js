//require("./sum.js"); //Methods and variables are protected by default

const {x, calculateSum} = require("./sum"); //by default it includes JS files automatically

var a = 10;
var b = 20;

calculateSum( a, b );

console.log( x );