// //union

// //example 1
//  let variable :number |string
//  variable = "hello"
//  variable =12

//   //example 2
//   function displayresult (value :number | string):void {
//     if(typeof value == 'number'){
//         console.log("the value number type ")
//     }
//     else {
//         console.log("the value is string type")
//     }
//   }

//   displayresult(1)
//   displayresult("hii")

//   //example 3 
//   type car = {
//     brand : string,
//     model : string 
//   }

//   type elecriccar={
//     batterytype : string
//   }

//   type hybridtype = car & elecriccar
//   type hybridtype2 = car | elecriccar

//   const carA :hybridtype={
//     brand : "suv",
//     model : "xz",
//     batterytype : "a1"
// }

// let carB :hybridtype2 ={
//     batterytype : "a2"

// }
   
// let carC :hybridtype2 = {
//     brand : "s1",
//     model : "s2"
// }

// //example 4

type logger = {
    log:(esssge:string) =>void;
}
type formatter = {
    format:(input:string) =>string;
}

type logformatter = logger & formatter
let logM :logformatter ={
    log:function(message){
        console.log("bye")
    },
    format:function(input){
        return "hii"
    }
}


// //exmample 5 

//  type Age=number
//  let userAge: Age = 23

//  type personS ={
//     name: string,
//     age :number,
//     email? : string

//  }


//   let personb :person ={
//     name : "snehal",
//     age :23
//   }




