"use strict";
//inheritance 
// //program 1
// class Dog {
//     // Properites 
//     breed:string;
//     constructor(breed:string){
//         this.breed = breed
//     }
// //     bark():void{
// //         console.log("Woof ..!")
// //     }
// // }
// // let myDog = new Dog("pug ")
// // console.log(myDog.breed)
// // myDog.bark()
// // //program 2
// // class Animal {
// //     // property
// //     type:string 
// //     constructor(ty:string){
// //         this.type = ty
// //     }
// //     // method 
// //     makeSound():void{
// //         console.log("Some generic sound ..")
// //     }
// // }
// // class Dog extends Animal {
// //     age:number;
// //     constructor(ty:string , ag:number){
// //         super(ty)
// //         this.age = ag
// //     }
// //     makeSound():void{
// //         console.log("Woof ..")
// //     }
// // }
// // let myDog2 = new Dog("pug",2)
// // console.log(myDog2.age)
// // console.log(myDog2.type)
// // myDog2.makeSound()
// // Program 3
// class BankAccount {
//     // Properties 
//     private balance: number = 0
//     private accountHolder: string;
//     // constructor 
//     constructor(accH: string) {
//         this.accountHolder = accH
//     }
//     deposit(amount: number): void {
//         this.balance = this.balance + amount
//     }
//     withDrawl(amount: number): void {
//         if (amount < this.balance) {
//             this.balance = this.balance - amount
//         }
//         else {
//             console.log('insufficient funds')
//         }
//     }
//     getBal(): number {
//         return this.balance
//     }
// }
// let SBI = new BankAccount("snehal kamble ")
// SBI.getBal()
