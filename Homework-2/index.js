"use strict"

// const arr = [];
// console.log(arr);

// const students = ['Ilya','Vasya','Polina'];
// console.log(students[0]);
// console.log(students[4]);

// //Перезарисание значения
// students[0] = "Roy";
// console.log(students[0]);
// console.log(students);

// //Добавление
// students[3] = "Ilya";
// console.log(students[3]);
// console.log(students);

// //Длина массива
// console.log(students.length);//4

// //Добавить элемент
// students.length = 5;
// console.log(students.length);//5
// console.log(students);//empty
// console.log(students[5]);//undefined

// //Убрать элементы
// students.length = 3;
// console.log(students);//["Roy", "Vasya", "Polina"];

// // перебор массива
// for(i = 0; i < students.length; i += 1){
//     console.log("students item:", students[i]);
// }
// //Заполнение данными 
// for(let i=1; i< 3; i += 1){
//     students.push(`students-${i}`);
// }
// console.log("students list:",students);

// //For... of алтернатива циклу FOR, если не нужен счетски
// //по массиву
// for (const student of students){
//     console.log(student);
// }

// //по строке
// const name = "Aleksandra";
// console.log(name);

// for(const character of name){
//     console.log(character);
// }

// let studentName = prompt("Enter name");
// console.log("имя студента:",studentName);

// const studentsNew = [
//     "roy",
//     "nick",
//     "morty"
// ];
// console.log("список студентов:", studentsNew);
let message;
// for (const student of studentsNew){
// if(student === studentName){
//     message = "OK"
//     break;
// }
// message ="Welcome"
// }
// console.log(`${studentName}, ${message}`);

// const carsList = [
//     "BMW",
//     "Toyota",
//     "Mersedes",
//     "Porshe",
//     "Audi",
//     "Lexus",
//     "Honda",
//     "Mazda",
//     "Land Rover",
//     "Nissan",
//     "Subaru"
//   ];

//   const myCar = "Land Rover";

//   let car = carsList[Math.floor(carsList.length * Math.random())];

//   console.log(car);
//   let newMessage  = "У меня еще не было такой машины";
//   for(const car of carsList){
//       if(car === myCar){
//           message = "Оу, у меня была такая тачка";
//           console.log("message")
//           break;

//       }
//   }
// console.log(newMessage)

const nums = [1, 5, 13, 45, 467];
const  numMore = 34;

for(let i = 0; i< nums.length; i+=1){
    if(nums[i] < numMore){
        continue;
    }
    console.log(`This number is more then ${numMore}: ${nums[i]}`);
}
//многомерные массивы
const matrix = [
    [1,2,3],
    [11,22,33],
    [111,222,333]
];
console.log(matrix[0][0]);//1
console.log(matrix[0][1]);//2
console.log(matrix[0][2]);//3

console.log(matrix[1][0]);//11
console.log(matrix[1][1]);//22
console.log(matrix[1][2]);//33

console.log(matrix[2][0]);//111
console.log(matrix[2][1]);//222
console.log(matrix[2][2]);//333


let total = 0;

for(let i = 0; i < matrix.length; i += 1){
    console.log("Вложенный массив", matrix[i]);
    for(let j = 0; j < matrix.length; j+=1){
        console.log("Элемент вложеного массива", matrix[i][j]);
        total += matrix[i][j];
    }
}
console.log(total);















