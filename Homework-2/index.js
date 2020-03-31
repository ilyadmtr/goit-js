"use strict"

//======================1 занятие=================== 

// // const arr = [];
// // console.log(arr);

// // const students = ['Ilya','Vasya','Polina'];
// // console.log(students[0]);
// // console.log(students[4]);

// // //Перезарисание значения
// // students[0] = "Roy";
// // console.log(students[0]);
// // console.log(students);

// // //Добавление
// // students[3] = "Ilya";
// // console.log(students[3]);
// // console.log(students);

// // //Длина массива
// // console.log(students.length);//4

// // //Добавить элемент
// // students.length = 5;
// // console.log(students.length);//5
// // console.log(students);//empty
// // console.log(students[5]);//undefined

// // //Убрать элементы
// // students.length = 3;
// // console.log(students);//["Roy", "Vasya", "Polina"];

// // // перебор массива
// // for(i = 0; i < students.length; i += 1){
// //     console.log("students item:", students[i]);
// // }
// // //Заполнение данными 
// // for(let i=1; i< 3; i += 1){
// //     students.push(`students-${i}`);
// // }
// // console.log("students list:",students);

// // //For... of алтернатива циклу FOR, если не нужен счетски
// // //по массиву
// // for (const student of students){
// //     console.log(student);
// // }

// // //по строке
// // const name = "Aleksandra";
// // console.log(name);

// // for(const character of name){
// //     console.log(character);
// // }

// // let studentName = prompt("Enter name");
// // console.log("имя студента:",studentName);

// // const studentsNew = [
// //     "roy",
// //     "nick",
// //     "morty"
// // ];
// // console.log("список студентов:", studentsNew);
// let message;
// // for (const student of studentsNew){
// // if(student === studentName){
// //     message = "OK"
// //     break;
// // }
// // message ="Welcome"
// // }
// // console.log(`${studentName}, ${message}`);

// // const carsList = [
// //     "BMW",
// //     "Toyota",
// //     "Mersedes",
// //     "Porshe",
// //     "Audi",
// //     "Lexus",
// //     "Honda",
// //     "Mazda",
// //     "Land Rover",
// //     "Nissan",
// //     "Subaru"
// //   ];

// //   const myCar = "Land Rover";

// //   let car = carsList[Math.floor(carsList.length * Math.random())];

// //   console.log(car);
// //   let newMessage  = "У меня еще не было такой машины";
// //   for(const car of carsList){
// //       if(car === myCar){
// //           message = "Оу, у меня была такая тачка";
// //           console.log("message")
// //           break;

// //       }
// //   }
// // console.log(newMessage)

// const nums = [1, 5, 13, 45, 467];
// const  numMore = 34;

// for(let i = 0; i< nums.length; i+=1){
//     if(nums[i] < numMore){
//         continue;
//     }
//     console.log(`This number is more then ${numMore}: ${nums[i]}`);
// }
// //многомерные массивы
// const matrix = [
//     [1,2,3],
//     [11,22,33],
//     [111,222,333]
// ];
// console.log(matrix[0][0]);//1
// console.log(matrix[0][1]);//2
// console.log(matrix[0][2]);//3

// console.log(matrix[1][0]);//11
// console.log(matrix[1][1]);//22
// console.log(matrix[1][2]);//33

// console.log(matrix[2][0]);//111
// console.log(matrix[2][1]);//222
// console.log(matrix[2][2]);//333


// let total = 0;

// for(let i = 0; i < matrix.length; i += 1){
//     console.log("Вложенный массив", matrix[i]);
//     for(let j = 0; j < matrix.length; j+=1){
//         console.log("Элемент вложеного массива", matrix[i][j]);
//         total += matrix[i][j];
//     }
// }
// console.log(total);

//==================================2 занятие====================================== 

//присвоение по значению(для примитивов)
// let a = 5;
// let b = a;
// console.log(a);//5
// console.log(b);//5

// a = 10;
// console.log(a);//10
// console.log(b);//5

// let lastName = 'Dmytrenko';
// let newLastname = lastName;
// console.log(lastName);//Dmytrenko
// console.log(newLastname);//Dmytrenko

// lastName = 'Simonenko';
// console.log(lastName)//Simonenko
// console.log(newLastname);//Dmytrenko

// //присвоение по значению(для сложных типов)
// const units = ["alfa","beta","gamma"];
// const newUnits = units;
// console.log(units);//["alfa","beta","gamma"]
// console.log(newUnits);//["alfa","beta","gamma"]

// units[0] = '1';
// console.log(units);//["1","beta","gamma"]
// console.log(newUnits);//["1","beta","gamma"]

// //МЕТОДЫ МАССИВОВ
// //Добавление элементов

// //.push() добавляет новій єелемент в конец массива
// units.push("delta");
// console.log(units);//["1","beta","gamma", "delta"];

// //.unshift() добавляет новый элемент в начало массива 
// newUnits.unshift("epsilon");
// console.log(newUnits);//["epsilon","1","beta","gamma", "delta"];
// console.log(units);//["epsilon","1","beta","gamma", "delta"];

// //Удаление эелементов

// // .pop() удаляет последний элемент из массива 
// units.pop("");
// console.log(units);////["epsilon","1","beta","gamma"];
// console.log(newUnits);//["epsilon","1","beta","gamma"];


// //.shift() удаляет первый [0] элемент из массива

// newUnits.shift([0]);
// console.log(newUnits);//[1","beta","gamma"];
// console.log(units);//[1","beta","gamma"];


// //Собрать эелементы 

// //.join() массив в строку

// console.log(units.join(""));//1betagamma
// console.log(units.join(", ")); // 1, beta, gamma
// console.log(units.join("-"));//1-beta-gamma

// //Разбить элементы 

// //.split() строку в массив
// const msg = "Welcome to my world";
// console.log(msg.split(" "));//["Welcome", "to", "my", "world"]
// console.log(msg.split(""));

// //Найти єелементы
// //по индексу

// //.indexOf() индекс эелемента, если он есть в массиве или отсутсвует элемента в массиве 
// console.log(units.indexOf("beta"));//1
// console.log(units.indexOf("b")); //-1

// //по наличию

// //.includes() указывает наличие или отсутствие элемента в массиве
// console.log(msg.includes("to"));//true
// console.log(msg.includes("WORLD"));//false
// console.log(msg.includes("world"));//true
// console.log(msg.includes("!"));//true
// console.log(msg.includes("t"));//true

// //проверка множества условий

// const fruit = "apple";
// if(fruit === "apple" || fruit === "srawberry"){
//     console.log("It is a red fruit");
// };

// const redFruits = ["apple","srawberry", "cherry", "cranberry"];
// const fruit = prompt("Enter a friut please");

// if(redFruits.includes(fruit)){
//     console.log("it is  a red fruit")
// }else{
//     console.log("it is not a fruit");
// }

//Скопировать массив

//.slice(a, b) копирует элемент от а до b, не включая в новый массив 
// const numList = [0,1,2,3,4,5,6,7];
// console.log(numList.slice(0,3));//[0,1,2]
// console.log(numList.slice(1,2));//[1]
// console.log(numList.slice(1,5));//[1,2,3,4]
// console.log(numList.slice(1));//[1,2,3,4,5,6,7,]
// console.log(numList.slice(3));//[3,4,5,6,7]
// console.log(numList.slice());//[0,1,2,3,4,5,6,7]
// console.log(numList.slice(-1));//[7]
// console.log(numList.slice(-2));//[6,7]
// console.log(numList.slice(-3));//[5,6,7]

// const newNumList = numList.slice(-4);
// console.log(newNumList);

// //Швейцарский нож

// //.splice() изменяет исходный массив

// //удаляет (нач.поз-я, кол-во эл-ов)

// console.log("numList", numList);//[0,1,2,3,4,5,6,7]
// const spliceArr = numList.splice(0,2);
// console.log("spliceArr",spliceArr);//[0,1] удаленные элементы
// console.log("numList", numList);//[2,3,4,5,6,7]измененные эелементы

// //вставляет (нач.поз-я, 0,el1,el2,el3...)
// console.log("numList",numList.splice(0,0,1));//[]
// console.log("numList",numList);//[1,2,3,4,5,6,7] измененный
// console.log("numList",numList.splice(7,0,8,9));//[1,2,3,4,5,6,7,8,9,]


// //заменяет

// console.log("numList", numList.splice(3,1,"Js"));
// console.log("numList", numList);
// console.log("numList", numList.splice(3,3,"Js"));
// console.log(numList);//[1, 2, 3, "Js"]

// //Обьединение массивов
// //.concat()
// const arr1 = ["Hello"];
// const arr2 = ["World!"];
// const lang = arr1.concat(arr2);
// console.log(lang.join(", "));

// const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// const test2 =  [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
// const test3 =  [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];

// const allTests = test1.concat(test2).concat(test3);
// console.log(allTests);



//FUNCTION

//function expressions

//обьявление фуекции
// const add = function(a,b,c){
//     return a + b + c;
// };

// //вызов функции

// const result = add(1,2,3);
// console.log(result);//6
// console.log(add(5,10,15));
// console.log(add(299,14,121));

// //ПОРЯДОК ВЫПОЛНЕНИЯ КОДА
// //обьявления
// const fn1 = function(){
//     console.log("1-я фнкция начала выполняться");
// //вызов
//     fn2();
//     console.log("ПРодолжение выполнения 1-й функции после выхода из 2-й фуекции")

// };
// const fn2 = function(){
//     console.log("Выполняется 2-я функция");
// };

// //вызов

// console.log("Начато выполнение основного кода");
// fn1();
// console.log("Продолжение выполнения основного кода после выхода из 1-й функции");


// const count  = function(a=0, b=10,c=1){
//     console.log(`countForm = ${a}, countTo = ${b}, step = ${c}`)

//     for(let i = a; i<=b;i+=c){
//      console.log(i);
//     }
// }

// count(1,5);
// count(2);fu






























