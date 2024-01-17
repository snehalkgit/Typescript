"use strict";
// // program 1
// //numeric
// enum Direction {
//     Up,
//     Down , 
//     Left,
//     Right
// }
// let movement:Direction = Direction.Down
// console.log(movement)
// // program 2
// enum Color 
// {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE"
// }
// let myFv:Color = Color.Red
// console.log(myFv)
// //let x = 10
// //const x = 10
// // program 3
// enum Status {
//     Active = 1,
//     Inavtive = 0,
//     Pending = 2
// }
// let currentStatus:Status = Status.Active
// console.log(currentStatus)
// program 
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
// retrive the value b index
//let a:WeekDay= WeekDay[new Date().getDay()]
// program 7 
var Shape;
(function (Shape) {
    Shape[Shape["Circle"] = 0] = "Circle";
    Shape[Shape["Square"] = 1] = "Square";
    Shape[Shape["Traingle"] = 2] = "Traingle";
})(Shape || (Shape = {}));
function draw(shape) {
    if (shape == 0) {
        console.log("calculate circle");
    }
    if (shape == 1) {
        console.log("calculate sqaure");
    }
    if (shape == 2) {
        console.log("calculate Triangle");
    }
}
draw(Shape.Circle);
draw(Shape.Square);
draw(Shape.Traingle);
