// "use strict";
// // Процедурный (не связанный) код
// const test1 = 16;
// // ==========================
// const test2 = 22;
// // ==========================
// const test3 = 23;
// // ==========================
// const score = (test1, test2, test3) => {
//   // с указаниями параметров
//   return console.log(test1 + test2 + test3);
// };

// score(test1, test2, test3);

// // Объектно-ориентированное программирование (ООП)
// const totalScore = {
//   test1: 16,
//   test2: 22,
//   test3: 23,
//   toGetSum() {
//     // без указания параметров
//     return this.test1 + this.test2 + this.test3;
//   },
// };
// console.log(totalScore.toGetSum());

// // КЛАССЫ - структура, описывающая состояние и поведение сущности

// // ЭКЗЕМПЛЯРЫ - объекты-представители сущности

// // ИНТЕРФЕЙС - набор свойств и методов класса

// // ПАРАДИГМЫ: инкапсуляция, абстракция, наследование, полиморфизм

// // ИНКАПСУЛЯЦИЯ - сокрытие деталей реализации от пользователя

// // АБСТРАКЦИЯ - выделение значимых характеристик

// // НАСЛЕДОВАНИЕ - создание новой сущности на базе существующей

// // ПОЛИМОРФИЗМ - переопределение методов базового класса в наследниках

// // КОНСТРУКТОРЫ
// // Функции - конструкторы (оператор new), !кроме стрелочных!
// // именуются с Заглавной буквы
// // встроенные в Js конструкторы: Object, Array, Number, String, Boolean

// const Project = function (title, theme, clients) {
//   this.title = title;
//   this.theme = theme;
//   this.clients = clients;
// }; // объявление

// const Human = function(arms,legs,head,body){
//     this.arms = arms;
//     this.legs = legs;
//     this.head = head;
//     this.bode = body;
// }
// const Ilia = new Human(2,2,1,1);
// console.log(Ilia);

// //вызовы
// const project = new Project("that`s manager", "human", "all types");
// console.log(project);//{clients: "all types", theme: "human", title: "that`s manager"}

// //Добавление елементов
// const Movie = function(name, rate, category){
//     this.name = name;
//     this.rate = rate;
//     this.category = category;
//     this.countUser = 0;

//     this.greet = function(userName){
//         console.log(`Hello ${userName}, welcome to ${this.name}`);
//     };
//     this.addUser = function(newUser){
//         this.countUser += newUser;
//         console.log(this.countUser);
//     };

//     this.removeUser = function(newUser){
//         this.countUser += newUser;
//         console.log(this.countUser);
//     };
// };

// const movi = new Movie("Hero", 9, 100);
// console.log(movi);


// const House = function(color = "white"){
//     this.color = color;
//     this.floors = 4;
//     this.windows = 20;
//     this.doors = 2;
//     this.walls = 3;
// }
// const myHouse = new House("red");//момент создания нового проэкта (экземпляр) 
// console.log(myHouse)

// //3
// const salesManger_1 = {
//     name:"Olena",
//     sales:5,
//     sell(product){
//         this.sales += 1;
//         return `Manger ${this.name} sold ${product}`;
//     },
// };
// console.log(salesManger_1.sales);//5
// console.log(salesManger_1.sell("Club Card"));
// console.log(salesManger_1.sell("Training Card"));
// console.log(salesManger_1.sales);//7

// const salesManger_1 = {
//     name:"Kostya",
//     sales:10,
//     sell(product){
//         this.sales += 1;
//         return `Manger ${this.name} sold ${product}`;
//     },
// };
// console.log(salesManger_2.sales);//5
// console.log(salesManger_2.sell("Club Card"));
// console.log(salesManger_2.sell("Training Card"));
// console.log(salesManger_2.sales);//7

// const Manager = function(name = "manager", sales = 0){
//     this.name = name;
//     this.sales = sales;

//     this.sell = function(product){
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}`;
//     };
// };

// const manager_1 = new Manager("Sasha");
// console.log(manager_1.name);
// console.log(manager_1.sales);

// console.log(manager_1.sell("Club card"));
// console.log(manager_1.sell("Training card"));

// console.log(manager_1.sales);



// //ПРОТОТИПЫ, прототипное наследование свойство [[Prototype]]
// // в консоли - _proto_

// const teacher = {lang_1: "HTML"};
// const child = {lang_2: "CSS"}; 

// child.__proto__ = teacher;// teacher - prototype fir child+

// console.log(child.lang_1);//HTML
// console.log(child.lang_2);//CSS

// //====
// //свойство наследуется от прототипа, только если такого нет в потомке,
// // если есть, то используется без обращения к такому же свойству родителя
// const child2 = {lang_1: "Js", lang_2: "CSS"};

// child2.__proto__ = teacher; //teacher -  prototype for child

// console.log(child2.lang_1);//Js
// console.log(child2.lang_2);//CSS

// //задание прототипа при создании нового объекта
// const animal = {eats:true};

// const cat = Object.create(animal);
// console.log(cat);
// cat.barks = true;
// console.log(cat);
// console.log(cat.barks);//true
// console.log(cat.eats);//true- динамическая диспетчиризация или делегация

// //перебор  личных (не наследуемых) свойств объекта
// const parentProd = {color: "red", count:7};
// const childProd = Object.create(parentProd);
// childProd.price = 30;

// for(const key in childProd){
//     console.log("__proto__ key", key);//вернет все унаследуемые ключи
// }

// for (const key in childProd){
//     if(!childProd.hasOwnProperty(key)) continue;//вернёт только личные ключи
//     console.log("own property:", key);
// }

// const childProdKeys = Object.keys(childProd);//вернет массив личніх ключей
// console.log(childProdKeys);



// const Guest = function(name, room){
//     this.name = name;
//     this.room = room;
// };
// console.log("Объект с методом constructor", Guest.prototype);

// const newGuest = new Guest("Ilya", 15);
// console.log(newGuest);//новый экземпляр

// Guest.prototype.showGuestInfo - function(){
//     console.log(
//         `метод функции-конструктора  - name: ${this.name}, room: ${this.room}`
//     );
// };

// newGuest.showGuestInfo();

// //НАСЛЕДОВАНИЕ И КОНСТРУКТОРЫ

// const Hero = function(name, xp){
//     this.name = name;
//     this.xp = xp;
// };

// Hero.prototype.gainXp = function(amount){
//     console.log(`${this.name} gained ${amount} experienxe points`);
//     this.xp += amount;
// };

// const mango  = new Hero("Mango", 1000);
// console.log(mango);

// mango.gainXp(500);
// console.log(mango);

// const Warrior = function(name, xp, weapon){
//     Hero.call(this, name, xp);
//     this.weapon = weapon
// }

// const poly = new Warrior("Poly", 200, "sword");

// console.log(poly);

