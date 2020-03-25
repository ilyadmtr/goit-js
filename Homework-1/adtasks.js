"use strict"

//1
// alert( 1 && null && 2 ); //null
// alert( null || 2 && 3 || 4 );//3


//2
// if (-1 || 0) alert( 'first' );// сработает потому что вернет true
// if (-1 && 0) alert( 'second' );// не сработает потому что вернет false
// if (null || -1 && 1) alert( 'third' );//сработает потому что вернет true

//3

// let age =prompt("enter");

// if(age >= 14  && age <= 90 ){
//     console.log("+")
// }
//В условии не было сказано что либо выводить в консоль, но я сделал это для проверки. Чтоб вы могли проерить.

//4
// if(!(age > 14 && age < 90)){
//     console.log("-");
// };

// if(age < 14 || age > 90){
//     console.log("+")
// };

let day = prompt("Enter today day please");
let weekday = ["the worst workday at week","a bit better workday", "a workday and so it`s a small Friday)", "a strange workday","the best workday", "holiday","invalid data" ];
 
switch (day) {
  case "Monday":
    weekday = weekday[0] ;
    break;
 
  case "Tuesday":
    weekday = weekday[1];
    break;
 
  case "Wednesday":
    weekday = weekday[2];
    break;
 
  case "Thursday":
    weekday = weekday[3];
    break;
 
  case "Friday":
    weekday = weekday[4];
    break;
 
  case "Saturday":
    case "Sunday":
    weekday = weekday[5];
    break;
 
  default:
    alert("Invalid entered data");
    weekday = weekday[6];
}
 
console.log(`${day} is ${weekday}`);