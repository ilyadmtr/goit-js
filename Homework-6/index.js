// "use strict"

// //ИМПЕРАТИВНЫЙ КОД - заданная последовательность инструкций(циклы)


// //ДЕКЛАРАТИВНЫЙ КОД -  описание желаемого результата, а не последовательность (команды и функции)


// //imperative vs declarative

// //imperative

// const array = [1,2,4,8,27,23,21];
// const  filterArray = [];

// for(let i = 0; i < array.length; i += 1){
//     if(array[i] > 3){
//         filterArray.push(array[i]);
//     }
// }
// console.log("imperative", filterArray);

// //declarative

// const filterNumber = array.filter((value) => {
//     return value > 3;
// });
// console.log("declarative", filterNumber)



// // ГРЯЗНАЯ ФУНКЦИЯ
// console.log("исходный массив", array)
// const dirtyMultiply = (arr,value) => {
//     for(let j = 0; j < arr.length; j += 1){
//         arr[j] += value;
//     }
// }

// dirtyMultiply(array, 5);
// console.log("измененный исходный массив", array);

// //ЧИСТАЯ ФУНКЦИЯ

// const cleanMultiply = (arr, value) => {
//     const result = [];
//     for(let k = 0; k < arr.length; k+=1){
//         result.push(arr[k] = value);
//     }
//     return result
// };


// console.log ( "исходный массив", array);
// cleanMultiply(array,5);
// console.log("не изменившийся исодный массив", array)


// //ПЕРЕБЕРАЮЩИЕ МЕТОДЫ МАССИВА

// const arrNumber = [1,4,3,14,16,2,20];
// for(let i=0; i < arrNumber.length; i += 1){
//     console.log(arrNumber[i]);
// }

// arrNumber.forEach((num) => console.log("forEach", num));

// arrNumber.forEach((num, idx) =>
//  console.log(`forEach: index ${index}, value: ${num}`)
//  );

// //метод .map

// //example 1
//  console.log("исходный массив", arrNumber);

//  const doubleNumbers = arrNumber.map((num) => num*2);
// console.log("map:", doubleNumbers);
// console.log("исходный массив:", arrNumber);

// //example 2
// const users = [
// {name: "Jack", isActive: true},
// {name: "Maks", isActive: false},
// {name: "Nastya", isActive: true}
// ]


// //.filter 

// //example
// console.log(arrNumber);
// const filteredArray = arrNumber.filter((el) => el > 10 );
// console.log("filte:", filteredArray);

// const filteredArray = arrNumber.filter((num) => num < 5 );
// console.log("filte:", filteredArray);

// //example2
// const activeUsers = users.filter((user) => user.isActive);
// console.log("filter", activeUsers);

// const activeUsers = users.filter((user) => !user.isActive);
// console.log("filter", activeUsers);

// //.find

// //example 1
// const newArr = [1,2,3,2,1];

// const nextToThree = newArr.find((el) => el > 3);

// console.log("find:", nextToThree);

// const newUsers = [
//     { id: "000", name: "Mango", isActive: true },
//     { id: "001", name: "Poly", isActive: false },
//     { id: "002", name: "Ajax", isActive: true },
//     { id: "003", name: "Chelsey", isActive: false },
//   ];
// const user = newUsers.find((el) => el.id === "002");

// const getUserById = (array,id) => array.find((obj) => obj.id === id );
// console.log(getUserById(newUsers, "003"));
// console.log(getUserById(newUsers, "03"));// undefined


// //.every
// //example 1

// const sumNums = [1,20,31,4,500];
// const isBig = (val) => val >= 10;
// console.log(sumNums.every(isBig));//false
// console.log(sumNums.some(isBig));//true


// const isBig1 = (val) => val >=1;
// console.log(sumNums.every(isBig1));//true
// console.log(sumNums.some(isBig1));//true

// const isBig2 = (val) => val >=50;
// console.log(sumNums.every(isBig1));//false
// console.log(sumNums.some(isBig1));//false


// //every ==> true, if all elements === true
// // some ==> true, if only one element === true


// // example 2

// const fruits = [
//     { name: "apples", amount: 3 },
//     { name: "bananas", amount: 10 },
//     { name: "oranges", amount: 1 },
//   ];

// const allAvailable =  fruits.every((andrei) => andrei.amount> 0);
// console.log(allAvailable);//true
// const anyAvailable =  fruits.every((andrei) => andrei.amount >= 10);
// console.log(anyAvailable);//true


// //.reduce
// console.log("initial array", sumNums);
// const newSum  = sumNums.reduce((acc, value) => acc + value, 10);
// console.log(newSum);

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];

//   const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
//   console.log(likes)


//   const countLikes = (tweets) =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
//   console.log(countLikes(tweets));

//   const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
// allTags.push(...tweets.tags);

// return allTags;
//   }, [];
 





