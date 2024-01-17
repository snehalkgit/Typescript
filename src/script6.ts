//program1 
interface personB {

    firstname: string
    lastname: string
    age: number
}

//extended interface 

// interface students extends personB {
//     studentID: number,
//     role: string
// }

// let teacher: students = {
//     firstname: "snehal",
//     lastname: "kamble",
//     age: 24,
//     studentID: 15,
//     role: "tester"
// }

//PROGRAM 2 

interface calculatorA{
   addE(x:number,y:number):number
   subE(x: number,y:number):number
}
 let cal : calculatorA={
    addE (x,y){
        return x +y
    },
    subE(x,y){
        return x- y
    }

 }

 //interface for  function type 
  interface additionE {
    (x:number, y:number) :number 
  }
let addR : additionE = (x,y)=>x+y


//program 3
 
 interface worladbank {
    save():number
    loan():number
 }

 class sbiA implements worladbank{
 save(){
    return 10

 }
 loan (){
    return 100

 }
 branchid(){
 return  1242
 }

 }

//  class pnbA implements worldBank{
//     save(){
//       return   100
//     }
//     loan(){
//         return 155
//     }
//      branchid(){
//         return 16161
//      }
//  }
//  let aq1= new sbiA()
// let q2 = new  pnbA()