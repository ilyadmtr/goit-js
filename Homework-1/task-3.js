"use strict"


// //first
// let total = 100;
// let ordered = 50;

// if(total < ordered){
//     console.log("На складе недостаточно товаров!")
// }
// else{
//     console.log("Заказ оформлен, с вами свяжется менеджер")
// }

// total = 100;
// ordered = 20;

// if(total < ordered){
//     console.log("На складе недостаточно товаров!")
// }
// else{
//     console.log("Заказ оформлен, с вами свяжется менеджер")
// }
// total = 100;
// ordered = 80;

// if(total < ordered){
//     console.log("На складе недостаточно товаров!")
// }
// else{
//     console.log("Заказ оформлен, с вами свяжется менеджер")
// }
// total = 100;
// ordered = 130;

// if(total < ordered){
//     console.log("На складе недостаточно товаров!")
// }
// else{
//     console.log("Заказ оформлен, с вами свяжется менеджер")
// }

//second

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let passentered = prompt("Enter your password");
// console.log(passentered)

// if(passentered === ADMIN_PASSWORD){
//     message = "Добро пожаловать!";
//     console.log(message);
// }
// else if(passentered === null){
//  message = "Отменено пользователем!";
//  console.log(message);
// }
// else{
//     message = "Доступ запрещен, неверный пароль!";
//     console.log(message);
// }
// alert(message);

//third

// let credits = 23580;
// let pricePerDroid = 3000;
// let quantityDroid = prompt("Enter quantity Droid");
// let totalPrice;
// console.log(quantityDroid);

// if(quantityDroid === null){
//     console.log("Отменено пользователем!");
// }
// else{
//     totalPrice = quantityDroid * pricePerDroid;
//     if(totalPrice > credits){
//         console.log("Недостаточно средств на счету!")
//     }
//     else{
//         credits = credits-totalPrice;
//         console.log(`Вы купили ${quantityDroid} дроидов, на счету осталось ${credits} кредитов.`)
//     }
// }

// fourth

// let country = prompt("enter country")
// let price;

// console.log(country);


// switch(country){

//     case "Китай":
//     price = 100;
//     break;

//     case "Чили":
//     price = 250;
//     break;

//     case "Австралия":
//     price = 170;
//     break;

//     case "Индия":
//     price = 80;
//     break;

//     case "Ямайка":
//     price = 120;
//     break;

//     default:
//     alert("В вашей стране доставка не доступна")
// }
// console.log(`Доставка в ${country} будет стоить ${price} кредитов`);

 
//fifth

// let total = 0;
// let input = (prompt("Введите первое число"));

// while (input) {
//   input = +(prompt("Введите число"));// я не знаю почему, но без этого + все ломается
//   total += input;
//   console.log(total);
// } ;

// alert(`Общая сумма чисел равна ${total}`);