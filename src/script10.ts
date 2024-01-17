//program 1 
 type result = string | number 
  let value :result 
  value : "snehal"
  value : 24

  //console.log(value)

//program 2 
  //intersection type 

type person ={
    
    name :string 
    age :number
}

 type students ={
    rollno :number
    surname : string
 }

 type studentsperson = person & students 

 let snehalk : studentsperson

 snehalk = {
    name : "snehal",
    age :24,
    rollno:8,
    surname :"kamble"
 }

//program 3 
 
// type shape = {color:string}
// type circle = shape & {radius :number}
// type square = shape & {sidelength :number}
// type shapeunion = circle | square
// type intersection = circle & square 

//  let s1 : circle;
//  let s2 : square;
//  let s3 : shapeunion;
//  let s4 : intersection


//   s1 = {
//     color : "pink",
//     radius : 144
//   }

//    s2 = {
//     color : "red",
//     sidelength: 58
// }



//   type car = {color : string};
//   type truck = car  & {container : string};
//   type bus = car & {passenger : number};
//   type CTB  = car & truck & bus
//   type CTBU = car | truck & bus 

//   let k:CTB = {

//     color: "red",
//     container : "small",
//     passenger : 5
//   }

//   let k2 :CTBU = {

//     color :"pink"

//   }


//    let k3 :CTBU ={
//     color:"green",
//     container : "big"

//    }
//     let k4 :CTBU ={
//         color :"brown",
//         passenger :4 
//     }

  