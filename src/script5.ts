//program 1

//interface

interface personA {
  first_name: string,
  last_name: string,
  age: number
}

let personA: personA = {
  first_name: "snehal",
  last_name: "kamble",
  age: 24
}

// program 2

interface Car {
  brand: string,
  model: string,
  year?: number
}

let volvo: Car = {
  brand: "tata",
  model: "xz1",
  year: 2023
}

// program 3

// interface Point {
//   readonly x: number,
//   readonly y: number
// }

// let points: Point = {
//   x: 12,
//   y: 2
// }
// points.x = 10
// points.y = 5


//Program 4

interface Calculator {
  add(x: number, y: number): number;
  sub(x: number, y: number): number;
}

let calculator: Calculator = {
  add: (x, y) => {
    return x + y
  },
  sub: (x, y) => {
    return x - y
  }

}
calculator.add(15, 4)
calculator.add(20, 5)


interface worldBank {
  save(rate: number): number;
  loan(rate: number): number;

}

//let SBI: worldBank = {
//   save(rate) {
//     return 10
//   },
//   loan(rate) {
//     return 10
//   }
// }
