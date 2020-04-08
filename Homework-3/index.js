"use strict"
// //OBJECTS

// const object  = {
//     key: value,
//     key: value// СВОЙЬА ОБЬЕКТА состоит из ключа и значения
//     //"key" || _key || $key 
// }
// //ОБЬЕКТ НЕЛЬЯЗЯ ИСПОЛЬЗОВАТЬ ДО ОБЬЯВЛЕНИЯ

// const frontend = {
//     language_1: "HTML",
//     language_2: "CSS",
//     language_3: "js"
// };
// console.log("frontend", frontend);

// const student = {
//     name: "Ilya",
//     lastName: "Dmytrenko",
//     age:15,
//     sex: "female",
//     course: frontend,
//     passExam:true
// };

// //ДОСТУП К СВОЙСТВАМ ОБЬЕКТА
// //1) object.key
// console.log(student.name);//Ilya
// console.log(student.lastName);//Dmytrenko
// console.log(student.age);//15
// console.log(student.sex);//female
// //2) object("key")
// console.log(frontend["language_1"]);//HTML
// console.log(frontend["language_2"]);//CSS
// console.log(frontend["language_3"]);//js


// // ИЗМИНЕНИЯ СВОЙСТВА ОБЪЕКТА
// //1) object.key
// student.lastName = "O'Hurn";
// console.log(student.lastName);//O'Hurn

// console.log("student", student);

// //2) object["key"]
// frontend["language_3"] = "Javascript";
// console.log(frontend["language_3"]);
// console.log("frontend", frontend);//{languange_1:"HTML", languange_2:"CSS", language_3: "Javascript"};

// //ДОБАВЛЕНИЕ НОВОГО СВОЙСТА ОБЪЕКТА
// //1) object.key
// student.address = "Vyborskaya";
// console.log(student.address);

// console.log("student", student);

// //2) object["key"]
// student["phone number"] = "380985406714"ж
// console.log(student["phone number"]);

// console.log("student", student);

// delete frontend.language_1;
// console.log(frontend.language_1);//undefined
// console.log(frontend);

// delete frontend["language_2"];
// console.log(frontend[language_2]);//undefined
// console.log("frontend", frontend);//{language_3: "Javascript"}

// //КОРОТКИЕ СВОЙСТВА ()

// const myTeacher = "Sasha Hrevtsova";
// const course = "frontend";

// const group_17 = {
//     myTeacher: "Dmytrenko Ilya",// так раньше писали
//     myTeacher,
//     course,
//     count:10
// };

// //ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
// //через переменную

// const key = "test";

// //через функцию
// const getKey = function(){
//     return "score";
// };

// const testResult = {
//     key, // тут передается пара - ключ:значение
//     [key]:"2",//тут в кей запишется значение переменной
//     [getKey()]:22
// };
// console.log(testResult);

//МЕТОДЫ ОБЪЕКТА

// const myProducts ={
//     milk:0.5,
//     eggs:10,
//     apples:5,
//     toCheck(){
//         //метод обїекта = значение свойства - функция
//         console.log("Проверь наличие");
// },
// oranges: 10
// };
// myProducts.toCheck();
// console.log(myProducts);

// //создаем новый метод
// myProducts.toBuySweets = function(){
//     console.log("Ну купи уже что-то сладенькое!");
// };

// myProducts.toBuySweets();
// console.log("myProducts", myProducts)

// delete myProducts.toBuySweets;
// console.log(myProducts);

// //ДОСТУП К ОБЪЕКТУ ЧЕРЕЗ this

// const product  = {
// type: "wellness & spa",
// category: "hair care",
// productName: "shampoo",
// price: 76.94,
// showProductName(){
//     console.log(this.productName);
// },
// changePrice(value){
//     this.price = value;
// }
// };

// product.showProductName();

// product.changePrice(89.5);//меняем цену
// console.log(product.price);//89.5 - получаем измененную цену

//ПЕРЕБОР ОБЪЕКТА(не так, как массив)
//цикл for...in - только для объктов, перебирает ключи объекта
// for(key in object){
//     //statements
// }

// const myCars = {
//     subaru:"Forester",
//     marda:"626",
//     volkswagen:"Golf",
//     landRover: "Range Rover"
// };
// for(const key in myCars){
//     console.log("key",key);
// }
// // Выведет все переменные в объекте meCars

// for(const key in myCars){
//     console.log("value", myCars[key]);
// }

//методы конструктора object

const hero = {
    name:"Super Man",
    power:100,
    lifes: 9,
    speed:45
}
//Object.keys(obj) - вернет массив со строчными ключами
const keysofHero = Object.keys(hero);
console.log(keysofHero);//["name","power","lifes", speed]

//который мы теперь можем перебрать циклом for...of   и взять значения
for(const key of keysofHero){
console.log("keys",key);//отрисует все ключи
console.log("value", hero[key]);//отрисует значение ключей
}

//Object.entries(obj)
const entries = Object.entries(hero);
console.log("entries of hero", entries);

for(const entry of entries){
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`);

    const valuesOfHero = Object.value(hero);
    conso.log(valuesOfHero);
}

//=========ДОП ЗАНЯТИЕ=======
const test1 = [18,14,12,21,17,29];
const minTest1 = Math.min(test1);
console.log(minTest1);//NaN

const test2 = [18,14,12,21,17,29];
const minTest2 = Math.min(...test2);



const marvelHeroes = [
    "Captain Marvel",
    "Thanos",
    "Black Panter",
    "Goose the Cat",
    "Black Widow",
    "Captain America"
  ];
 
  console.log(marvelHeroes);

  const copyOfMarvelHeroes = [...marvelHeroes];
  console.log(copyOfMarvelHeroes);
  const copyOfMarvelHeroes = marvelHeroes.slice();//то же самое


  console.log(
      marvelHeroes === copyOfMarvelHeroes
  )//false - разные ссылки

  //ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ РАСПЫЛЕНИИ
const newCopyOfMarvelHeroes = [...marvelHeroes, "Hulk", "spider-Man"];
//можно добавить элементы при копировании
console.log("new copyOfMarvelHeroes", newCopyOfMarvelHeroes); 
//добавлен Халк и Спайдермен

const firstNum = [1,2,3];
const secondNum = [4,5,6];

const allNums1 = firstNum.concat(secondNum);
const allNumsReverse1 = secondNum.concat(firstNum);
console.log(allNums1);
console.log(allNumsReverse1);

const allNums2 = [...firstNum, ...secondNum];
const allNumsReverse2 = [...secondNume, ...firstNum];
console.log(allNums2);
console.log(allNumsReverse2);

//КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПІЛЕНИИ частично
const notAllNums = [...firstNum.slice(0,1), ...secondNum.slice(-1)];
console.log(notAllNums);//[1,6]

//КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПІЛЕНИИ с добавлением  эелемента
const updateNums = [
    ...firstNum.slice(0,2),
    "js is the best ",
    ...secondNum.slice(-2)
];
console.log(updateNums);//[1,2, "js is the best"]


const mod_1 = {test:2, hw:3, addit:2};
const mod_2 = {test:4, hw:6};

const mod_3 = Object.assign({},mod_1,mod_2);
console.log(mod_3);


const a = {x: 1, y: 2 };
const b = {x:5, j:10, }








