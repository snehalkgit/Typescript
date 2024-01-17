"use strict";
//program1 
function identity(arg) {
    return arg;
}
let q1 = identity(55);
//progarm2 
function identity2(arg) {
    return arg;
}
let q2 = identity2("snehal");
//program3 
// T=>string
// T=>number
function identity3(arg) {
    return arg;
}
let a1 = identity3(45);
let a2 = identity3("hiii");
//progarnm3 
function identity4(arg1, arg2) {
    if (typeof arg1 == "number" && typeof arg2 == "string") {
        return arg1 + arg2;
    }
    else if (typeof arg1 == "string" && typeof arg2 == "string") {
        return arg1 + arg2;
    }
}
let a22 = identity4(12, 5);
let q23 = identity4("snehal", "hi");
function identity5(arg) {
    arg.length;
    return arg;
}
identity5("hi");
//program5
class boxs {
    constructor(a) {
        this.varA = a;
    }
    displayvarA() {
        return this.varA;
    }
}
let object = new boxs("hi");
let object2 = new boxs(45);
