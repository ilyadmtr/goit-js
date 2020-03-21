"use strict" ;



// // const  a = 9.99; 
// // a = "Javascript"

// // console.log(a);
// // console.log(typeof a);
// // let b;
// // b = "blabla";
// // console.log(b);
// // console.log(typeof b);


// // console.log(c);
// // var c = 10;
// // c = 11;
// // console.log(c)

// // const f = 25;

// // console.log(f)



// // const isAuthenticated = true;
// // console.log(isAuthenticated);
// // console.log(typeof isAuthenticated);

// // const isModalOpen = false;
// // console.log(isModalOpen);
// // console.log(typeof isModalOpen);


// // const guest = null;
// // console.log(guest);
// // console.log(typeof guest);

// // const massage = "aaaaaaaaaaaaaaaaaa_help meee";
// // console.log(massage);
// // let name = "Student";
// // console.log(name);
// // console.log(`${name}, ${massage}`);

// // alert(`${name}, ${massage}`);

// // console.log(typeof massage);

// // const isReady = confirm("Скачать вирус?");
// // console.log(isReady);

// // const enterName = prompt("Your name");
// // console.log(enterName);


// const x = 100;
// const y = 5;
// const b = 2;
// console.log(x + y);//Прибавление переменных х и у
// console.log(x - y);//Вычитание  переменных х и у
// console.log(x * y);//Умножение  переменных х и у
// console.log(x / y);//Деление   переменных х и у
// console.log(x % y); //Остаток от деления. К примеру 10/3 = 3 и остаток 1.
// console.log(y ** b);// Вознесение у в степень b 
// console.log((x - y) * b);
// console.log((x - y)**2);

// let value = 100;
// value = value - y;
// console.log(value);

// value += 45;// Для того чтоб прибавлять числа к переменной нужно всегда добавлять =. В консоль выведет число 45.
// console.log(value);


// const r = 100;
// const p = 3;
// const t = 100;

// console.log(p<r, p>t, r>=t)// В консоли будет выводит
// console.log(r > p < t);
// console.log(3 > 2 > 1);

// console.log(p == r, p === r, r === t, );
// console.log(3 == '3');
// console.log( 3 === '3');
// console.log(p!==t, t !==r) ;






// const num1 = 5;
// const num2 = 10;
// const str1 = "5";
// const str2 = "10";
// console.log(num1 === str1, num1 == str1);

// console.log(num1 + str1);
// console.log(typeof (num1 + str1));
// console.log(num1 + num2 + str1 +str2);
 

// // const userAge = Number(prompt("Enter your age PLS"));
// // console.log(userAge);
// // console.log(typeof userAge);

// // let userAge2 = prompt("enter name ");
// // console.log(userAge2);
// // console.log(typeof userAge2);
// // userAge2 = Number(userAge2);
// // console.log(userAge2);
// // console.log(typeof userAge2);
// const val1 = 17;
// console.log( Number(val1));
// console.log(typeof val1)

// const val2 = "23";
// console.log(Number(val2));
// console.log(typeof Number(val2));

// console.log(Number.parseInt("122px"));
// console.log(Number.parseInt("11abc22"));
// console.log(Number.parseInt("1.1xyi9"));
// console.log(Number.parseInt("lndfb"));

// console.log(  "xfmnl;vln"   );
// console.log(Number.parseFloat("122px"));
// console.log(Number.parseFloat("11abc22"));
// console.log(Number.parseFloat("1.1xyi9"));
// console.log(Number.parseFloat("lndfb"));

// console.log(  "************"   );

// const validNumber = Number("1024");
// console.log(validNumber);
// console.log(Number.isNaN(validNumber));

// const invalidNumber = Number("10nfks24");
// console.log(invalidNumber);
// console.log(Number.isNaN(invalidNumber));


// const O = 0.1;
// const P = 0.2;
// console.log(O * P);
// console.log(O + P);

// console.log((O * 10 + P * 10)/ 10 )



// console.log(Math.floor(1.99));
// console.log(Math.floor(1.2));
// console.log(Math.floor(1.4));


// console.log(Math.ceil(1.99));
// console.log(Math.ceil(1.2));
// console.log(Math.ceil(1.4));


// console.log(Math.round(1.99));
// console.log(Math.round(1.2));
// console.log(Math.round(1.4));


// console.log(Math.max(3,5,6,7,8,9,3,4,5,6,7,8,3,4,6,7,9,7,6,5,4,5,6,7,8,9,89,89,89,89))
// console.log(Math.min(3,5,6,7,8,-9,3,4,5,6,7,8,3,4,6,7,9,7,6,5,4,5,6,7,8,9,89,89,89,89))

// console.log(Math.pow(5,2));

// console.log(Math.random());
// console.log(Math.random()* (10-1) +1);;



// let animal = "tiger";
// console.log(animal.length);
//  animal = "pink panter!"
//  console.log(animal.length);

//  console.log(animal.indexOf("pink"));
//  console.log(animal.indexOf("panter"));

//  console.log(animal.indexOf(" "));
//  console.log(animal.indexOf("p"));
//  console.log(animal.indexOf("i"));


//  console.log(animal.indexOf("hgjdkiec"));



//  console.log(animal.includes("panter"));
//  console.log(animal.includes("punk"));

//  console.log(animal[0]);
//  console.log(animal[1]);
//  console.log(animal[2]);
//  console.log(animal[3]);
//  console.log(animal[4]);


//  console.log(animal.toLocaleUpperCase());
//  console.log(animal);

// animal = "CAT";
// console.log(animal.toLocaleLowerCase());



// 3-task

// alert( true || true );   // true
// alert( false || true );  // true  в этом операторе преимущество у значения true 
// alert( true || false );  // true
// alert( false || false ); // false


// const age=30;
// const trueAge= age<31 || age > 29; 
// console.log(trueAge); // true

// const trueAge2 = age <29 || age>31 || age >32 ;
// console.log(trueAge); // true


// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false


// const quantity=50;
// console.log ((false && true) || true); // true
// console.log (false && (true || true)); // false

// console.log ((quantity > 39 && quantity < 49) || quantity > 48); // true

// console.log ((false&&true) || NaN); // NaN



// let day = prompt("Enter today day please");
// let weekday;

// switch (day) {
//     case "Monday": // то есть в случае выполнения чего либо;
//       weekday = "the worst workday at week"; // будет выполнятся вот это;
//       break; // эта строчка для того, что бы комп выполнял не всё сразу а           то     только одну команду;
   
//     case "Tuesday":
//       weekday = "a bit better workday"; 
//       break;
  
//     case "Wednesday":
//       weekday = "a workday and so it`s a small Friday)";
//       break;
  
//     case "Thursday":
//       weekday = "a strange workday";
//       break;
  
//     case "Friday":
//       weekday = "the best workday";
//       break;
  
//     case "Saturday":
//       weekday = " holiday";
//       break;
  
//     case "Sunday":
//       weekday = "also holiday";
//       break;
  
//     default:
//       alert("Invalid entered data");
//   }
//   console.log(`${day} is ${weekday}`); 



//   let day = prompt("Enter today day please");

// if (day === String("Saturday") || day === String("Sunday")) {
//     weekday= "holiday";
// }
// else {
//     weekday = "workday";
// }
// console.log(weekday);



// let day = prompt("Enter today day please");
// if (day === String("Saturday") || day === String("Sunday")) {
//         weekday= "holiday";
// }
// else if (
//     day === "Monday" ||
//     day === "Tuesday" ||
//     day === "Wednesday" ||
//     day === "Thursday" ||
//     day === "Friday" 
//  ) {
//      weekday = "workday";
//  } else {
//      weekday = "Indalid data";
//  }
//  console.log(day);
//  console.log(weekday);



//  let studentAge = prompt('Enter your age please');
// let group;

// if (studentAge >11 && studentAge < 15) {
//     group = "Junior";
// }
// else if ( studentAge > 14 && studentAge < 18) {
//     group = "Middle";
// }
// else {
//     group = "Your age is not valid for children group.";
// }
// console.log(studentAge);
// console.log(group);


// let answer;
// let question = confirm("Are you student?");

// if (question === true) {
//     answer = "yes";
// }

// else {
//     answer = "no";
// }


// answer = question === true ? "yes" : "no"; // где «===» - это равно, «?» - тогда, «:» - во всех остальных случаях, или просто тег «else»;
// console.log(answer);


// const max = 100;

// for (let i = 10; i <= max; i += 5) {
//   console.log(i);
// }


// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   console.log(i);
//   sum += i;
// }
// console.log(sum);



// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = , max % i`);
// }



// let counter = 0;

// while (counter <10) {
//     console.log("counter:", counter);
//     counter += 1;
// }
// // в этом примере неравенство строгое, то есть ровно меньше 10 без знака =, то есть консоль выведет значения от 0 до 9 включительно;



// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }
// // консоль выведет числа от 19 до 24 включительно, потому что неравенство строгое;


// let myFirstName = "Eva";
// if (true) {
//    console.log("BLOCK scope:", myFirstName);
// }
//    console.log("GLOBAL scope:", myFirstName);

// // так же если первую строчку записать в третьей а впервой её убрать, то в консоли в глобальной строке выдаст ошибку. Можешь попробовать.



// if (true) {
//     let mySecondName = "Yesypenko";
//     console.log("BLOCK scope:", mySecondName);
// }
//     console.log("GLOBAL scope:", mySecondName);




//     const global = "global";

// if (true) {
//   const blockA = "block A";
//   console.log(global); // global
//   console.log(blockA); // block A
//   //   console.log(blockB); // Uncaught ReferenceError: blockB is not defined at module1.js:463
//   //   console.log(blockC); // Uncaught ReferenceError: blockB is not defined at module1.js:464

//   if (true) {
//     const blockB = "block B";
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B
//     // console.log(blockC); // Uncaught ReferenceError: blockB is not defined at module1.js:471
// }
// }

// if (true) {
//   const blockC = "block C";
//   console.log(blockC); // block C
//   console.log(global); // global
//   //   console.log(blockA); // ReferenceError: blockA is not defined
//   //   console.log(blockB); // ReferenceError: blockB is not defined
// }

// console.log(global); // global
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined



