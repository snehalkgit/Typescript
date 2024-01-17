//enum

 enum color{
    black,
    green,
    pink
 }
  if (color.black){
    console.log("black colo ")
  }


else if (color.green){
    console.log("green color")
} 
else if (color.pink){
    console.log('pink color')
}

// any 
 
 let numberS : number = 10
 let numberp :any = [11,44,77]

//  //void 

//  function additionA():any {
//     console.log("hiii")
//     return true 
 //}

 //null 
   
  let apiresponse : null = null ;

   //undefined 
    let firstnameA : undefined = undefined

    // writing functions with typescript 

     
   //function declartion 

    function additionB1(x: number , y : number){
console.log(x +y)
return x +y 
}

let sum = additionB1 ( 15,5)

//function expression 
 let additionA2 = function(x : number , y :number ){
    return x +y
 }

  let sum2 = additionA2(45,8)


  //optional parameter

   function greet1 ( name :string,greeting : string ){
    if (greeting)
{
    console.log("greeting value was correct ")
} 
 else {
    console.log("greeting value was not passed ")
 }  }
  greet1("hii" ," bye ")


function greet ( name :string,greeting ?: string ){
        if (greeting)
    {
        console.log("greeting value was correct ")
    } 
     else {
        console.log("greeting value was not passed ")
     }  }
      greet("hii")
    
      