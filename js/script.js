"use strict";

// lesson # 13 comunication with user

// const answers = [];

// // answers[0] = prompt('What is your name?', '');
// // answers[1] = prompt('What is your family name?', '');
// // answers[2] = prompt('How old are you?', '');

// console.log(typeof(answers));
// console.log(answers);
// document.write(answers);


// lesson # 14 Interpolation

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const username = "Ivan";
// alert(`Guten Morgen, ${username}`);


// lesson # 15 Operators in JavaScript
// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;
 
// console.log(++incr);
// console.log(--decr);


// lesson # 16 System GIT / Array and Objects

// const numberofFilms = +prompt('Hello, how many films have you watched already?', '');

// const personalMovieDB = {
//     count: numberofFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };

// const a = prompt('One of you last watched movies?', ''),
//       b = prompt('What is your rate is for that movie', ''),
//       c = prompt('One of you last watched movies?', ''),
//       d = prompt('What is your rate is for that movie', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const numberOfPerson = +prompt('How many person have you asked?', '');
// const personProfileDB = {
//     count: numberOfPerson,
//     name: {},
//     age: {},
//     marriageStatus: {},
//     nameOfSpouse: {},
//     howLongTogether: {}
// };

// const askedName = prompt('What is your name?', ''),
//       askedAge = prompt('How old are you?', ''),
//       askedStatus = prompt('Are you married?', ''),
//       askedSpouseName = prompt('What is your partner name?', ''),
//       askedHowLong = prompt('How long are you together?', '');

// personProfileDB.name = askedName;
// personProfileDB.age = askedAge;
// personProfileDB.marriageStatus = askedStatus;
// personProfileDB.nameOfSpouse = askedSpouseName;
// personProfileDB.howLongTogether = askedHowLong;

// console.log(personProfileDB);

// lesson # 20 Conditions if / else / ? : / switch - case - default

// if (4 == 4) {
//     console.log('ok!');
// } else {
//     console.log('error!')
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('OK!');
// }

// (num == 50) ? console.log('perfect!') : console.log('Damn error!');

// const number = 70

// switch (number) {
//     case 49:
//         console.log('Wrong!');
//         break;
//     case 100:
//         console.log('Wrong!!');
//         break;
//     case 50:
//         console.log('Exactly!');
//         break;
//     default:
//         console.log('Sorry! Not this time');
//         break;
// }

// lesson # 21 Logical operations

// const hamburger = 5;
// const fries = 1;

// if (hamburger && fries) {
//     console.log('It is declicios'); // It is declicios
// }

// console.log(hamburger && fries); // true

// const hamburger = 5;
// const fries = 3;

// if (hamburger && fries) {
//     console.log('It is declicios'); // It is declicios
// }

// console.log(hamburger && fries); // 3


// operator and and && - it stops with first false 
// const hamburger = 5;
// const fries = 1;
// const cola = 2

// if (hamburger >= 3 && cola >= 1 && fries) {
//     console.log('It is declicios') // It is declicios
// }   else {
//         console.log('We go to another restaurant');
//     }

// operator or || - it stops with first true
// const hamburger = 0;
// const fries = 0;
// const cola = 2;

// if (hamburger >= 3 || cola || fries) {
//     console.log('It is declicios') // It is declicios
// }   else {
//         console.log('We go to another restaurant');
//     }

// let johnReport, alexReport, samReport, mariaReport = 'done';
// console.log(johnReport || alexReport || samReport || mariaReport); // done (because only Maria did report anyway report is done)

// const hamburger = 4;
// const fries = 3;
// const cola = 0;
// const nuggets = 2

// if (hamburger >= 3 && cola >= 2 || fries === 3 && nuggets >= 1) {
//     console.log('It is declicios') // It is declicios
// }   else {
//         console.log('We go to another restaurant');
//     }

// console.log(NaN || 2 || undefined); // 2
// console.log(NaN && 2 && undefined); // NaN
// console.log(1 && 2 && 3); // 3
// console.log(!1 && 2 || !3); // false
// console.log(25 || null && !3); // 25
// console.log(NaN || null || !3 || undefined || 5); // 5
// console.log(NaN || null && !3 && undefined || 5); // 5
// console.log( 5 === 5 && 3 > 1 || 5); // true


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!') // done!
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!') // done!
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// } else {
//     console.log('wrong!'); // wrong
// }


// lesson # 22 Cycles

/////// CYCLE while
// let num = 50;

// while (num <= 55) {
//    console.log(num);
//    num++;
// }


/////// CYCLE do {something} while (this condition)

// let num = 45;

// do {
//    console.log(num);
//    num++;
// }
// while (num < 55);


///// CYCLE for (i = 1; when it is < 8; i++ increase for 1 untill it will be equal to 8)

// for (let i = 1; i < 8; i++) {
//    console.log(i);
// }


// let num = 40;

// for (let i = 1; i < 8; i++) {
//    console.log(num);
//    num++;
// }


// for (let i = 1; i <= 10; i++) {
//    if (i === 5) {
//       // break; // stops at 5 
//       continue; // skip 5 and continue untill 10
//    }
//    console.log(i);
// }


// lesson # 23 Cycles in cycle

// for (let i = 0; i <3; i++) {
//    console.log(i);
//    for (let j = 0; j <3; j++) {
//       console.log(j);
//    }
// }


// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//    for (let j = 0; j < i; j++) {
//       result += "*";
//    }
//    result += '\n';
// }
// console.log(result);


// first: for (let i = 0; i <3; i++) {
//    console.log(`First level: ${i}`); 
//    for (let j = 0; j <3; j++) {
//       console.log(`Seceond level: ${j}`);
//       for (let k = 0; k <3; k++) {
//          if (k === 2) continue first;
//          console.log(`Third level: ${k}`);
//       }
//    }
// }


// Taks #1: При помощи цикла выведите числа от 5 до 10 в консоль.
// 5 и 10 включительно. Цикл можно использовать любой

// function firstTask() {
//    for (i = 5; i<=10; i++) {
//       console.log(i);
//    }
// }
// firstTask();


// Task #2 При помощи цикла for вывести числа от 20 до 10 в консоль.
// В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// function secondTask() {
//    for (let i = 20; i >= 10; i--) {
//       if (i === 13) break;
//       console.log(i);
//    }
// }
// secondTask();


// Task #3 При помощи цикла for выведите чётные числа от 2 до 10 включительно

// function thirdTask () {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// thirdTask();


// Task #4 Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//        continue;
//    } else {
//        console.log(i);
//    }
// }

// function fourthTask () {
//     let num = 2;

//     while (num <= 16) {
//         if (num % 2 === 0) {
//             num++;
//             continue;
//         } else {
//             console.log(num);
//         }
//         num++;
//     }
// }
// fourthTask();


// Task # 5 Заполните массив цифрами от 5 до 10 включительно. Помните, 
// что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i<=10; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }
// fifthTask();


// Task 2.1 Заполните новый массив (result) числами из старого (arr). 
// Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив 

// function firstAdvancedTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
//     return result;
// }
// firstAdvancedTask();


// Task 2.2 Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondAdvancedTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             result[i] = data[i] * 2;
//         } else if (typeof (data[i]) === 'string') {
//             result[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(result);
//     return result;
// }
// secondAdvancedTask();


// Task 2.3 Разверните массив data наоборот при помощи цикла и запишите данные 
// в массив result. Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdAdvancedTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }
//     console.log(result);
//     return result;
// }
// thirdAdvancedTask();


// Task 2.3 (**) Задача на формирование фигуры
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++){
//         result += " ";
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);


// Lesson 24 cycle practice:

// let askingMovie = prompt('What movie did you watch?', '');
// const personalMovieDB = {
//     count: '15',
//     name: 'John',
// }

// if (askingMovie === '' || askingMovie.length >= 50) {
//     askingMovie = prompt('What movie did you watch?', '');
// }
// else if (personalMovieDB.count <= 10) {
//     alert("ohh! It is not enough!");
// } 
// else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//     alert("Yep! You are classical!");
// }
// else if (personalMovieDB.count > 30) {
//     alert("Waaaw! You are Kinoman!");
// }
// else {
//     alert('Something went wrong!');
// }


// const numberofFilms = +prompt('Hello, how many films have you watched already?', '');

// const personalMovieDB = {
//     count: numberofFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('What is you last watched movie?', ''),
//           b = prompt('What is your rating?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//     }    
// } 
// console.log(personalMovieDB);

// if (personalMovieDB.count < 10) {
//     console.log('less than 10');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('You are classic');
// } else if (personalMovieDB.count >= 30) {
//     console.log('You are kinoman');
// } else {
//     console.log('Something went wrong!')
// }
// console.log(personalMovieDB);


// lesson # 26 Functions and Arrow functions

// Function Declatarion
// function foo() {
//     code
// }

// function showFirstMessage() {
//     console.log('Hello it is my first function.');
// }
// showFirstMessage();

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage('Hello it is my first function.');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);


// Function Expression
// let foo = function() {
//     code
// }

// const logger = function() {
//     console.log('Hello logger!')
// };
// logger();


//  Arrow functions 
// const calc = (a, b) => {return a + b}; 


// let a = 3;
// function addTwo(x) {
//     let ret = x + 2;
//     return ret;
// }
// let b = addTwo(a);
// console.log(b); // 5


// let val1 = 2;
// function multiplyThis(n) {
//     let ret = n * val1;
//     return ret;
// }
// let multiplied = multiplyThis(6);
// console.log('example of scope:', multiplied) // 12


// let val = 7;
// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b;
//         return ret;
//     }
//     return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('example of function returning a function: ', sum); // 15


// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3) // example increment 1 2 3

// let age = 16;

// let welcome = (age < 18) ?
//     () => console.log('Привет!') :
//     () => console.log("Здравствуйте!");

// welcome(); // Привет!

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// } 
// ask(
//     'Are you agree?',
//     () => alert('You are agreed!'),
//     () => alert('You have canceled!')
// );