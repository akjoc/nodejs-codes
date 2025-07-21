console.log("Sum.js included");

function calculateSum( a,b ){
    sum = a + b;
    console.log(sum);
}

console.log("after function");

var x = "This is x from sum module";

//module.exports = {calculateSum: calculateSum}; //to explicity use any module function in another module

module.exports = {
    x,
    calculateSum
};          //New way to exports different objects