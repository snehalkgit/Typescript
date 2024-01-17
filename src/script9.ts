// ///program 1 

// class myclass{
//     public myproperty :string
//     constructor(){
//         this.myproperty = "snehal"
//     }
// }

//  let s = new myclass()
//  console.log(s.myproperty)

//  //program 2 


//  class myClass2 {
//     private myPrivateProperty:string;
//     constructor(){
//         this.myPrivateProperty = "hello form sk"
//     }

//     // access the private field in public method

//     public getValue(){
//         return this.myPrivateProperty
//     }

// }
// let S = new myClass2()
// //console.log(b.myPrivateProperty) // not accessible
// S.getValue()


// //program3 
// // protected ///
 
//  class myclass3{
//     protected age :number
//     constructor(ag:number){
//         this.age = ag
//     }
//     private displaybalance ():number{
//         return 10000
//     }
//     public displayage (){
//         this.displaybalance()
//         return this.age
//     }
//  }


// class myClass4 extends myclass3{
//      public displayAge2(): number {
//         //private method and properties are not accessiblel outside class 
//         // protected methods and propeties are accessible within the inherited properties
//         return this.age 
//     }
// }


//        // interface ---- complete abstraction
//              // partially hide -- abstract class 
// abstract class worldBank {
//     // abstract method 
//     abstract loan1():number
//     abstract save1():number
//     displayCountryName(){
//         return "India"
//     }
// }

// class SBIaa extends worldBank {
//     loan1():number{
//         console.log('i am loan from SBI')
//         return  10
//     }
//     save1():number{
//         console.log('i am loan from SBI')
//         return  20
//     }
//     branchName(){
//         return "nagpur"
//     }
// }

// // We cannot have instance of abstract class 
// let sbiAB = new SBIaa()
// sbiAB.branchName()
// sbiAB.loan1()
// sbiAB.save1()
// sbiAB.displayCountryName()



