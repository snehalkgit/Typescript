"use strict";
//enum
var color;
(function (color) {
    color[color["black"] = 0] = "black";
    color[color["green"] = 1] = "green";
    color[color["pink"] = 2] = "pink";
})(color || (color = {}));
if (color.black) {
    console.log("black colo ");
}
else if (color.green) {
    console.log("green color");
}
else if (color.pink) {
    console.log('pink color');
}
// any 
let numberS = 10;
let numberp = [11, 44, 77];
//  //void 
//  function additionA():any {
//     console.log("hiii")
//     return true 
//}
//null 
let apiresponse = null;
//undefined 
let firstnameA = undefined;
// writing functions with typescript 
//function declartion 
function additionB1(x, y) {
    console.log(x + y);
    return x + y;
}
let sum = additionB1(15, 5);
//function expression 
let additionA2 = function (x, y) {
    return x + y;
};
let sum2 = additionA2(45, 8);
//optional parameter
function greet1(name, greeting) {
    if (greeting) {
        console.log("greeting value was correct ");
    }
    else {
        console.log("greeting value was not passed ");
    }
}
greet1("hii", " bye ");
function greet(name, greeting) {
    if (greeting) {
        console.log("greeting value was correct ");
    }
    else {
        console.log("greeting value was not passed ");
    }
}
greet("hii");
