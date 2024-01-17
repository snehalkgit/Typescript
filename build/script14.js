"use strict";
// //program1 
// function msg(par:any):any{
//     return par
// }
// let s= msg(1)
// let q = msg("snehal")
// let r = msg(true)
// function greet2(nme:string){
//     return nme
// }
//  let a = greet2("hii")
//  //program2 
// function A<T>(arg:T):T{
//     return arg
// }
// let q1 = A<string>("snehal")
// let q2= A<number>(8)
// //progarm3 
// function addA<T>(p1:T,p:T){
//     if(typeof p1 =='number' && typeof p == 'number'){
//         console.log(p+p1)
//         return p+ p1
//     }
//     else if (typeof p1=="string"&& typeof p =="string"){
//         return p + p1
//     }
// }
// let q11= addA<number>(2, 4)
// let q12 = addA<string>("hello", "world")
// //program3 
// class box<T>{
//     private content:T;
//     constructor (co:T){
//         this.content = co
//     }
//     getcontenct():T{
//         return this.content
//     }
// }
//  let boxnum = new  box<number> (55)
//  let boxstring = new box<string> ("hii")
