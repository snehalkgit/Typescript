//program1 
 function identity(arg:number){
    return arg
 }
 let q1= identity(55)

 //progarm2 
   function identity2(arg:string){
    return arg 
   }
   let q2 = identity2("snehal")

   //program3 
    // T=>string
    // T=>number

    function identity3<T>(arg:T):T{
        return arg 
    }
     let a1 = identity3<number>(45)
     let a2 = identity3<string>("hiii")

     //progarnm3 

     function identity4<T>(arg1:T,arg2:T){
        if(typeof arg1 == "number" && typeof arg2 =="string"){

            return arg1 +arg2
        }
else if(typeof arg1 == "string" && typeof arg2 == "string"){
    return arg1 +arg2
}

     }

     let a22= identity4<number>(12,5)
     let q23= identity4<string>("snehal","hi")

     //program4


     interface lengthwise{
        length :number
     }
     function identity5<T extends lengthwise>(arg:T):T{
        arg.length
        return arg
     }

     identity5<string>("hi")

     //program5

     class boxs<T>{
        private varA:T
        constructor(a:T){
            this.varA = a
        }
        displayvarA():T{
            return this.varA
        }
     }

      let object= new boxs<string>("hi")
      let object2 = new boxs<number>(45)