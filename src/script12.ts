//program 1

let variable1 :any = "hello sql"
let length1 :number = (variable1 as string ).length

//program 2

let variable2 :any = "HEELO snehal"
let length2 :number =(variable2 as string).length
let length3:number =(<string>variable2).length 

//program3 
 
 type person1 = {name:string , age:number}
 let variable4 :any ={ name : "snehal",age :24}
 let variable5 :person1 = variable4 as {name :string,age :number}


 //program4 

   let array:any[] =["snehal","kamble",25478569]
   let lastname = (array[1] as string).toUpperCase().length


   // let lastname2 = (array[1] as string ).toUpperCase().length

    //program5 
     type employee1 ={id :number,name : string,salary :number}
     let data:any ={id :1,name :"snehal",salary :200000}
     let variable6 :employee1 = data as employee1

     //program 6
      let ss = document.querySelector('input') as HTMLInputElement
      ss.value
     


  