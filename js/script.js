"use strict";

//! lesson # 13 comunication with user

//? const answers = [];

// // answers[0] = prompt('What is your name?', '');
// // answers[1] = prompt('What is your family name?', '');
// // answers[2] = prompt('How old are you?', '');

// console.log(typeof(answers));
// console.log(answers);
// document.write(answers);


//! lesson # 14 Interpolation

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const username = "Ivan";
// alert(`Guten Morgen, ${username}`);


//! lesson # 15 Operators in JavaScript
// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;
 
// console.log(++incr);
// console.log(--decr);


//! lesson # 16 System GIT / Array and Objects

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

//! lesson # 20 Conditions if / else / ? : / switch - case - default

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

//! lesson # 21 Logical operations

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


//! lesson # 22 Cycles

/////// CYCLE while
// let num = 50;

// while (num <= 55) {
//    console.log(num);
//    num++;
// }


//? CYCLE do {something} while (this condition)

// let num = 45;

// do {
//    console.log(num);
//    num++;
// }
// while (num < 55);


//? CYCLE for (i = 1; when it is < 8; i++ increase for 1 untill it will be equal to 8)

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


//! lesson # 23 Cycles in cycle

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


//todo Taks #1: При помощи цикла выведите числа от 5 до 10 в консоль.
//todo 5 и 10 включительно. Цикл можно использовать любой

// function firstTask() {
//    for (i = 5; i<=10; i++) {
//       console.log(i);
//    }
// }
// firstTask();


//todo  Task #2 При помощи цикла for вывести числа от 20 до 10 в консоль.
//todo В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// function secondTask() {
//    for (let i = 20; i >= 10; i--) {
//       if (i === 13) break;
//       console.log(i);
//    }
// }
// secondTask();


//todo Task #3 При помощи цикла for выведите чётные числа от 2 до 10 включительно

// function thirdTask () {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// thirdTask();


//todo Task #4 Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же.
//todo Не создайте бесконечный цикл! Иначе браузер может зависнуть. Цикл, который нужно переписать:

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


//todo Task # 5 Заполните массив цифрами от 5 до 10 включительно. Помните, 
//todo что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i<=10; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }
// fifthTask();


//todo Task 2.1 Заполните новый массив (result) числами из старого (arr). 
//todo Количество элементов в массиве можно получить как arr.length, 
//todo а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//todo Должен получиться точно такой же массив 

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


//todo Task 2.2 Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
//todo а если попадается строка строка - то к ней было добавлено " - done".
//todo Для определения типа данных используйте typeof();
//todo Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

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


//todo Task 2.3 Разверните массив data наоборот при помощи цикла и запишите данные 
//todo в массив result. Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

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


//todo Task 2.3 (**) Задача на формирование фигуры
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


//! Lesson 24 cycle practice:

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


//! lesson # 26 Functions and Arrow functions

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


//?  Arrow functions 
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


//! # Lesson 26 Function and Arguments

// const usdCurr = 89;
// const eurCurr = 90;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr)
// convert(500, eurCurr)


//******************************* */

//! # Lesson 27 Function and Return

// const usdCurr = 89;
// const discount = 0.1;

// const convert = (amount, curr) => {
//     if(typeof amount !== "number" || isNaN(amount) || !amount) {
//         alert('Please insert only numbers!');
//         return; // Прерываем выполнение функции, если тип amount не является числом или равен NaN
//     }
//         return curr * amount; // а так возвращай нам это
// }

// let a = 0
// const promotion = (result) => {
//     a = result * discount
//     console.log(`The additional promotion amount is ${a}`);
// }

// const res = convert(+prompt('insert your amount', ''), usdCurr); // вызываем функцию convert = (amount, curr) amount запращиваем у пользователя.

// promotion(res); // вызываем функцию promotion = (result) всесто аргумента result идет значение константы res 

// const summaryRes = res + a;

// console.log(`The original amount is ${res}`);
// console.log(`Your summary amount is ${summaryRes}`);

//******************************* */


//! # Lesson 28 Function and Return practice
// excercise #1: 1) Создайте функцию, которая будет на вход принимать 1 аргумент
// с именем человека и возвращать строку. Пример: вызов функции sayHello('Антон')
// возвращает строку "Привет, Антон!".

// const sayHello = (name) => {
//     let res = `Hello ${name}`
//     console.log(res);
//     return res;
// }
// sayHello('azaMaza');


//todo excercise #2: 2) Создайте функцию, которая принимает в себя 1 аргумент в виде
//todo целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент,
//todo и число на 1 больше. Пример: вызов функции returnNeighboringNumbers(5)
//todo возвращает массив в виде [4, 5, 6].

// const returnNeighboringNumbers = (a) => {
//     let arr = [a - 1, a, a + 1];
//     console.log(arr);
//     return arr;
// }
// returnNeighboringNumbers(6);

//******************************* */

// const returnNeighboringNumbers = (num) => {
//     if (typeof num !== 'number' || !Number.isInteger(num)) {
//         throw new Error('The argument must be an integer');
//     }

//     return [num - 1, num, num + 1];
// }
//? Пример использования:
// const result = returnNeighboringNumbers(5);
// console.log(result); // Вывод: [4, 5, 6]

//******************************* */


//todo excercise #2: 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база,
//todo второе число - это сколько раз нужно будет повторить это число в прогрессии.
//todo (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях,
//todo о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---".
//todo После последнего числа их не должно быть. Если второй аргумент не является числом,
//todo равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через
//todo оператор typeof) Примеры:
//todo Вызов функции getMathResult(5, 3) даст ответ 5---10---15
//todo Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
//todo Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
//todo Вызов функции getMathResult(10, '5') даст ответ 10
//todo Вызов функции getMathResult(10, 0) даст ответ 10
//todo Вызов функции getMathResult(20, -5) даст ответ 20

// const getMathResult = (num1, num2) => {
//     if (typeof num1 !== 'number' && typeof num2 !== 'number' || typeof num1 !== 'number') {
//         console.log('Both arguments must be numbers');
//     }
//     else if (typeof num2 !== 'number' || num2 <= 0) {
//         console.log(num1);
//     }
//     else {
//         let result = '';
//         for (let i = 1; i <= num2; i++) {
//             result += `${num1 * i}`;
//             if (i !== num2) {
//                 result += '---'
//             }
//         }
//         console.log(result);
//         return result;
//     }
// }
// getMathResult(9, 3);
// getMathResult(9, '4');
// getMathResult('9', 5);
// getMathResult('9', '6');
// getMathResult(0, 7);
// getMathResult(9, 0);
// getMathResult(9, -8);

//******************************* */

// const getMathResult = (num1, num2) => {
//     if (isNaN(num1) && isNaN(num2) || typeof num1 !== 'number') {
//         console.log('Both arguments must be numbers');
//     } else if (typeof num2 !== 'number' || num2 <= 0) {
//         console.log(num1);
//         return num1
//     } else {
//         let result = '';
//         for (let i = 1; i <= num2; i++) {
//             result += `${num1 * i}`;
//             if (i !== num2) {
//                 result += '---'
//             }
//         }
//         console.log(result);
//         return result
//     }
// }
// getMathResult(9, 3);
// getMathResult(9, '4');
// getMathResult('9', 5);
// getMathResult('9', '6');
// getMathResult(0, 7);
// getMathResult(9, 0);
// getMathResult(9, -8);

//******************************* */


//! # Lesson 28 Methods and properties
//?String methods

// const str = "teSt";
// const arr = [1, 2, 5];
// console.log(str.length); // 4
// console.log(arr.length); // 3
// console.log(str[1]); // e
// console.log(str.toUpperCase()); // TEST
// console.log(str.toLowerCase()); // test

// const fruit = "Tasty apple";
// console.log(fruit.indexOf('fruit')); // -1 (because it has not found in string)
// console.log(fruit.indexOf('apple')); //6 (it is number of index where apple started 'a'pple)

// const loggin = 'Azamat Zhamankulov';
// console.log(loggin.slice(7, 18)); // Zhamankulov
// console.log(loggin.slice(7)); // Zhamankulov
// console.log(loggin.slice(-11, -1)); // Zhamankulo
// console.log(loggin.substring(7, 18)); // Zhamankulov (substring cannot get -1 it will give o)
// console.log(loggin.substr(7, 6)); // Zhaman (form which index to start, how many symbols to cut)

//******************************* */
//? Number methods

// const num1 = 12.2;
// const num2 = 12.5; 
// const numTest = "12.3px";

// console.log(Math.round(num1)); // 12 
// console.log(Math.round(num2)); // 13
// console.log(Math.round(numTest)); // NaN

// console.log(parseInt(numTest)); // 12 from string gives rounded number
// console.log(parseFloat(numTest)); // 12.3 from string gives float number

//******************************* */


//! # Lesson 29 Functions prectice excercise

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many films did you watch?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Please insert number of how many films did you watch?', '');
//     }
// }
// start ();
//******************************* */

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Insert title of one of the last seen films', ''),
//               b = +prompt('Please rate the film in scale of 1 - 10', '');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done!');
//         } else {
//             console.log('Error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();
//******************************* */

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('You are an amature, too less films has been watched.');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('You are a classic watcher!');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('You are a kinoman!');
//     } else {
//         console.log('There is something went wrong!')
//     }
// }
// detectPersonalLevel();
//******************************* */

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);
//******************************* */

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is under number ${i}`);
//     }
// }
// writeYourGenres();

//******************************* */

//! lesson # 29 more practice

//todo Excercise # 1 1) Создайте функцию, которая будет вычислять объем и площадь
//todo полной поверхности куба (тоже базовая математика, иногда используется
//todo в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра
//todo куба. Ответ выведите в формате строки, который изображен в примерах.
//todo Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть
//todo строку "При вычислении произошла ошибка"

// const calculateVolumeAndArea = (a) => {
//     if (a % 1 !== 0 || typeof a !== 'number' || isNaN(a) || a < 0) {
//         let calcError = console.log('При вычислении произошла ошибка');
//         return calcError;
//     } else {
//         let cubVolume = a * a * a;
//         let cubArea = a*a*6;
//         let result = `Объем куба: ${cubVolume}, площадь всей поверхности: ${cubArea}`;
//         console.log(result);
//         return result;
//     }
// }
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea('15');
// calculateVolumeAndArea(-15);
// calculateVolumeAndArea(0);


//todo Excercise # 2 2) Напишите функцию, которая будет определять номер купе
//todo по переданному ей номеру места. Функция принимает только целое число от 1 до 36.
//todo Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
//todo "Ошибка. Проверьте правильность введенного номера места"
//todo Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// const getCoupeNumber = (seatNum) => {
//     if (seatNum % 1 !== 0 || typeof seatNum !== 'number' || isNaN(seatNum) || seatNum < 0) {
//         let error = console.log("Ошибка. Проверьте правильность введенного номера места");
//         return error;
//     } else if (seatNum === 0 || seatNum > 36) {
//         let notExist = console.log("Таких мест в вагоне не существует");
//         return notExist;
//     } else {
//         let seatResult = Math.ceil(seatNum / 4);
//         console.log(seatResult);
//         return seatResult;
//     }
// }
// getCoupeNumber(33);
// getCoupeNumber(7);
// getCoupeNumber(3);
// getCoupeNumber(300);
// getCoupeNumber(0);
// getCoupeNumber(3.3);
// getCoupeNumber(-3);
// getCoupeNumber('two');

// const isNumberFloatOrInteger = (num) => {
//     if (num % 1 !== 0 || typeof num !== 'number' || num < 0) {
//         let result = console.log(`Number is float`);
//         return result;
//  } else {
//     console.log('Number is integer')
//  }
// }
// isNumberFloatOrInteger(15);
// isNumberFloatOrInteger(1);
// isNumberFloatOrInteger(1.5);
// isNumberFloatOrInteger('15');
// isNumberFloatOrInteger(0);
// isNumberFloatOrInteger(-15);


//todo Excercise # 1 1) Создайте функцию, которая принимает в себя целое число минут и 
//todo возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на 
//todo окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента
//todo приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка,
//todo проверьте данные"

// const getTimeFromMinutes = (totalMinutes) => {
//     if (typeof totalMinutes !== 'number' || totalMinutes < 0 || isNaN(totalMinutes) || totalMinutes % 1 !== 0) {
//         let error = console.log('Ошибка, проверьте данные');
//         return error;
//     } else {
//         let hours = Math.floor(totalMinutes / 60);
//         let minutes = totalMinutes % 60;
//         let lastDigit = hours % 10; // Получаем последнюю цифру числа
        
//         if (lastDigit >= 5 || lastDigit === 0 || (hours >= 10 && hours <= 14)) {
//             hours = `${hours} часов`;
//         } else if (lastDigit >= 2 && lastDigit <= 4) {
//             hours = `${hours} часа`;
//         } else {
//             hours = `${hours} час`;
//         }

//         let result = console.log(`Это ${hours} и ${minutes} минут`);
//         return result;
//     }
// }

// getTimeFromMinutes(0);
// getTimeFromMinutes(1);
// getTimeFromMinutes(-6);
// getTimeFromMinutes(1777);
// getTimeFromMinutes(1444);
// getTimeFromMinutes(785);
// getTimeFromMinutes(555);
// getTimeFromMinutes(2555);
// getTimeFromMinutes(2777);
// getTimeFromMinutes(3111);
// getTimeFromMinutes('120');


//todo Excercise # 2 2) Напишите функцию, которая принимает в себя 4 числа и возвращает
//todo самое большее из них. Если один из аргументов не является числом или их меньше 4 
//todo то возвращается 0. Дробные числа разрешены.

// const findMaxNumber = (num1, num2, num3, num4) => {
//     if (isNaN(num1 + num2 + num3 + num4) || typeof(num1 + num2 + num3 + num4) !== 'number') {
//         console.log(0);
//         return 0
//     } else if (num1 > num2 && num1 > num3 && num1 > num4) {
//         console.log(num1);
//         return num1;
//     } else if (num2 > num1 && num2 > num3 && num2 > num4) {
//         console.log(num2);
//         return num2;
//     } else if (num3 > num1 && num3 > num2 && num3 > num4) {
//         console.log(num3);
//         return num3;
//     } else if (num4 > num1 && num4 > num2 && num4 > num3) {
//         console.log(num4);
//         return num4;
//     }
// }

// findMaxNumber(500, 3000, 600, 750);

//todo Method 2 *********************************

// const findMaxNumber = (a, b, c, d) => {
//     if (typeof (a+b+c+d) !== 'number') {
//         console.log(0);
//         return 0;
//     } else {
//         ////let arr = new Array(a, b, c, d);
//         ////let maxArr = Math.max(...arr);
//         let maxArr = Math.max(a, b, c, d);
//         console.log(maxArr);
//         return maxArr;
//     } 
// }
// findMaxNumber(30, -5, 60, 77.7);


//todo Fibonacci sequence - Создайте функцию, которая будет принимать в себя один аргумент-целое положительное
//todo число. Она должна возвращать строку, в которой будут через пробел выведены числа
//todo Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
//todo Если переданный аргумент не число - вернуть пустую строку.
//todo Решать без применения рекурсии.

// const fibonacciSequence = (n) => {
//     if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
//         let empty = '';
//         console.log(empty);
//         return empty; // Возвращаем пустую строку, если аргумент не является положительным целым числом
//     }
    
//     let fibList = [];  // Начальное значение списка пустое
//     let a = 0;
//     let b = 1;
//     for (let i = 0; i < n; i++) {  // Генерируем n чисел Фибоначчи
//         fibList.push(a);  // Добавляем текущее число Фибоначчи в список
//         let temp = a + b;
//         a = b;
//         b = temp;
//     }
    
//     let gapBetween = fibList.join(' ');
//     console.log(gapBetween);
//     return gapBetween;  // Возвращаем строку, объединяя числа Фибоначчи через пробел
// }

// fibonacciSequence(4);  // => "0 1 1 2"
// fibonacciSequence(0);  // => ""
// fibonacciSequence(7);  // => "0 1 1 2 3 5 8"
// fibonacciSequence('7');  // => ""
// fibonacciSequence(1);  // => "0"
// fibonacciSequence(8.8); // => ""
// fibonacciSequence(10); // => "0 1 1 2 3 5 8 13 21 34"


//! lesson 30 - Method trim()

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many films did you watch?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Please insert number of how many films did you watch?', '');
//     }
// }
// start ();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Insert title of one of the last seen films', '').trim(), //!! delete for empty space
//               b = +prompt('Please rate the film in scale of 1 - 10', '');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done!');
//         } else {
//             console.log('Error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('You are an amature, too less films has been watched.');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('You are a classic watcher!');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('You are a kinoman!');
//     } else {
//         console.log('There is something went wrong!')
//     }
// }
// detectPersonalLevel();


// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function toggleVisibleMyDB () {
//     if (personalMovieDB.privat) {
//         personalMovieDB.privat = false;
//     } else {
//         personalMovieDB.privat = true;
//     }
// }

// toggleVisibleMyDB()


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         let genre = prompt(`Please insert your favorite genre is under number ${i}`).trim();
        
//         if (genre === '' || genre == null) {
//             console.log('You inserted wrong data please check again!');
//             i--;
//         } else {
//             personalMovieDB.genres[i - 1] = genre;
//         }
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//         console.log(`User's favorite genre number ${i + 1} - is ${item}`)
//     });
// }

// writeYourGenres();


//! Lesson 31 - Callback functions

// function first() {
//     // do something and it takes sometime to implement the function
//     setTimeout(function () {
//         console.log(1);
//     }, 500)
// }

// function second() {
//     console.log(2);
// }

// first(); // because of setTimeout 500 it will give a result after 2nd function
// second(); // second function will implemented 1st 

// //!so now callback functions we can give as a argument of first function strictly by order

// function learnJS(lang, callback) {
//     console.log(`I learn: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I have finished this course!');
// }

// learnJS('JavaScript course', done);


//! Lesson 32 - Objects and Destruction of objects

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   }
// };

// // console.log(options.colors.bg);

// // delete options.colors.bg;

// // console.log(options); // without colors.bg

// // for (let key in options) {
// //     let result = `Properity of ${key} is ${options [key]}`;
// //     console.log(result);
// // }

// //! when it gives [object Object] + counter++

// let counter = 0;

// for (let key in options) {
//   if (typeof(options [key]) === 'object') {
//     for (let i in options [key]) {
//       console.log(`Properity of ${i} is ${options [key] [i]}`);
//       //counter++; // 2
//     }
//   } else {
//     let result = `Properity of ${key} is ${options [key]}`;
//     console.log(result);
//     //counter++; // 3
//   }
//   counter++; // 4
// }
// console.log(counter);

//! Object.keys(object) => gives massive with keys(.length) we can take length of massive

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   }
// };

// let lengthOfObject = Object.keys(options).length;
// console.log(lengthOfObject); // ['name', 'width', 'height', 'colors']


//! In objects we can add as key functions as well

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log("We can add to objects as key functions as well!")
//   }
// };

// options.makeTest();


//! Object destructization => to separate objects to small pieces by keys

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log("We can add to objects as key functions as well!")
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border); // black
// console.log(bg); // red


//! Lesson 33 => array & psevdomassive push => add to end; pop => delet from end

// const arr = [1, 4, 3, 6, 8];

// arr.pop(); //! delete from end of the array last index
// arr.push(10); //! add to end of the array 10

// console.log(arr);

//! shift => delete from begining of the array first index
//! unshift => add from begining of the array

//todo iterration of massive with loop for()
// const arr = [1, 4, 3, 6, 8];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); // 1, 4, 3, 6, 8
// }

//todo iterration of massive with loop for(of) we can stop with beark/ continue
// const arr = [1, 4, 3, 6, 8];
// for (let value of arr) {
//     console.log(value); // 1, 4, 3, 6, 8
// }

//! lets check arr.length
// const arr = [1, 4, 3, 6, 8];
// // console.log(arr.length); // 5 => 0 1 2 3 4 => 4 + 1 //! last index + 1

// arr[99] = 0;
// console.log(arr.length); // 100 => 0 1 2 .... 99 + 1 => 100 //! last index + 1
// console.log(arr); // [ 1, 4, 3, 6, 8, <94 empty items>, 0 ]

//! method forEach()
// const myArr = [1, 4, 3, 6, 8];
// myArr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside of the array ${arr}`)
// });

//! arr.map // arr.every/some // arr.filter // arr.reduce

//!String.split to identify how we can separate strings and get array
// const str = prompt("Please insert your products", "");
// const products = str.split(", ");
// console.log(products); //['do', 'see', 'it', 'separates', 'with', 'comma',] what ever we write it separate with , 


//! we can do revers get from array => string
// const insertedNames = prompt("Please insert your products", "");
// const invitedGuests = insertedNames.split(", ");
// console.log(invitedGuests.join('; ')); // Azamat; Adil; Nurik; Azat it gives as string

//! we can sort array with method arr.sort(); as string by alphabet
// const arrOfstrings = ['Azamat', 'Adil', 'Azat', 'Nurik', 'Danchik', ' '];
// arrOfstrings.sort();
// console.log(arrOfstrings); // [' ', 'Adil', 'Azamat', 'Azat', 'Danchik', 'Nurik']

// const arrOfNumbers = [8, 13, 11, 26, 75, 19];
// arrOfNumbers.sort();
// console.log(arrOfNumbers); //! [11, 13, 19, 26, 75, 8] as string by symbols

//! we can add function to sort numbers in a right way
// const arrOfNumbers = [8, 13, 11, 26, 75, 19];
// arrOfNumbers.sort(compareNum);
// console.log(arrOfNumbers); // [8, 11, 13, 19, 26, 75]
// function compareNum(a, b) {
//     return a - b;
// }


//! Lesson 35 Passing by either reference or by value

// let a = 5;
// let b = a; // Passing by value
// b = 10;
// console.log(a); // 5

//! exp 2
// let a = 5;
//     b = a // Passing by value
// b = b + 5;

// console.log(b); // 10
// console.log(a); // 5


//! passing by reference

// let arr1 = [1, 2, 3];
// let arr2 = arr1; // Passing by reference
// arr2.push(4);
// console.log(arr1); // Outputs: [1, 2, 3, 4]


// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; // Passing by reference, so it is not a copy it is reference to obj
// copy.a = 10;

// console.log(copy); // { a: 10, b: 1 }
// console.log(obj); // { a: 10, b: 1 }


//! How to COPY obj and array

// function copyObj(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copyObj(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 11;

// console.log(newNumbers); // { a: 10, b: 5, c: { x: 11, y: 4 } }
// console.log(numbers); //    { a: 2, b: 5, c: { x: 11, y: 4 } }


//! object.assign(obj1, obj2);
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const additionalNumbers = {
//     d: 17,
//     e: 21
// };

// const addednumbers = Object.assign(numbers, additionalNumbers);
// console.log(addednumbers); // { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 21 }


//! make clone with Obejct.assign({}, obj1);
// const additionalNumbers = {
//     d: 17,
//     e: 21
// };

// const clone = Object.assign({}, additionalNumbers);
// clone.d = 25;
// console.log(additionalNumbers); // { d: 17, e: 21 }
// console.log(clone); // { d: 25, e: 21 }


//! COPY of array
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray;

// newArray[1] = 'changed index 1';
// console.log(newArray); // [ 'a', 'changed index 1', 'c' ]
// console.log(oldArray); // [ 'a', 'changed index 1', 'c' ]


//! for array we can use array.slice();
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'changed index 1';
// console.log(newArray); // [ 'a', 'changed index 1', 'c' ]
// console.log(oldArray); // [ 'a', 'b', 'c' ]


//! another method of copy for array with ...array
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet); // all arrays will be in one array

//! here practical use of ...array

// function log(a, b, c) {
//     console.log(a); // 2
//     console.log(b); // 5
//     console.log(c); // 7
// }
// const num = [2, 5, 7];

// log(...num);


//! spread operator!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const array = ['first', 'second'];
// const newArray = [...array];
// newArray[1] = 'it is third';

// const obj1 = {
//     one: 1,
//     two: 2
// };

// const newObj2 = {...obj1};
// newObj2.two = 5;

// console.log(array); // [ 'first', 'second' ]
// console.log(newArray); // [ 'first', 'it is third' ]
// console.log(newObj2); // { one: 1, two: 5 }
// console.log(obj1); // { one: 1, two: 2 }


//! deep copy with using JSON.parse(JSON.stringify(object)):
// let obj3 = { 
//     a: 1,
//     b: { 
//       c: 2,
//     },
//   }
//   let newObj3 = JSON.parse(JSON.stringify(obj3));
   
// obj3.b.c = 20;
// newObj3.b.c = 55;
// console.log(obj3); // { a: 1, b: { c: 20 } }
// console.log(newObj3); // { a: 1, b: { c: 55 } }


//! Practice exercise Objects # 1
//todo Напишите функцию showExperience, которая будет принимать в себя объект со всеми
//todo данными и возвращать строку с опытом showExperience(personalPlanPeter) => '1 month'

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%',
//           ruby: '30%'
//       },
//       exp: '1 month'
//   }
// };

// const showExperience = (plan) => {
//   const {exp} = plan.skills;
//   console.log(exp);
//   return exp;
// }
// showExperience(personalPlanPeter);


//! Practice exercise Objects # 2
//todo 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект
//todo со всеми данными и возвращать строку в нужном виде.
//todo showProgrammingLangs(personalPlanPeter) =>
//todo "Язык js изучен на 20% Язык php изучен на 10%"

// const showProgrammingLangs = (plan) => {
//   const {programmingLangs} = plan.skills;
//   let result = '';
//   for (let key in programmingLangs) {
//     if (!programmingLangs[key]) {
//       let errorResult = 'Error!!!';
//       console.log(errorResult);
//       return errorResult;
//     } else {
//       result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//   }
//   console.log(result);
//   return result;
// }
// showProgrammingLangs(personalPlanPeter);


//! Practice exercise Objects solving as a function # 2
//todo 2) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове
//todo метод будет принимать в себя объект и возвращать строку в нужном виде.
//todo personalPlanPeter.showAgeAndLangs(personalPlanPeter) =>
//todo 'Мне 29 и я владею языками: RU ENG'

// const showAgeAndLangs = (plan) => {
//   const {age} = plan;
//   const {languages} = plan.skills;
//   let resultStr = `Мне ${age} и я владею языками: `;

//   languages.forEach(function(lang) {
//     resultStr += `${lang.toUpperCase()} `;
//   });
//   console.log(resultStr);
//   return resultStr;
// }

// showAgeAndLangs(personalPlanPeter);

//! Practice exercise Objects solving as a method inside of the main object # 2
//todo Вот как можно добавить метод showAgeAndLangs к объекту personalPlanPeter:

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ['ru', 'eng', 'ind'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%',
//       ruby: '30%'
//     },
//     exp: '1 month'
//   },
//   showAgeAndLangs: function(obj) {
//     if (!obj || !obj.age || !obj.skills || !obj.skills.languages || !Array.isArray(obj.skills.languages)) {
//       return "Ошибка: неправильный формат объекта";
//     }
    
//     const age = obj.age;
//     const languages = obj.skills.languages.map(lang => lang.toUpperCase()).join(' ');

//     return `Мне ${age} и я владею языками: ${languages}`;
//   }
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); // Выводит: 'Мне 29 и я владею языками: RU ENG IND'

//! arr.map(func => )
// const numbers = [1, 2, 3];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // Выводит: [2, 4, 6]
// console.log(numbers); // Выводит: [1, 2, 3] (исходный массив остается неизменным)

//! arr.forEach => result will be in each line separate
// const numbers = [1, 2, 3];
// numbers.forEach(num => console.log(num * 2)); //! Выводит по строчно: 2, 4, 6
// console.log(numbers); // Выводит: [1, 2, 3] (исходный массив остается неизменным)

//! arr.forEach
// const numbers = [1, 2, 3];
// let numForEach = numbers.forEach(num => num * 2);
// console.log(numForEach) //! Выводит: undefined
// console.log(numbers); // Выводит: [1, 2, 3] (исходный массив остается неизменным)

//! Practice exercise Array # 3

//todo Напишите функцию showFamily, которая будет принимать в себя массив строк и
//todo возвращать сообщение в нужном формате.
//todo showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// const showFamily = (arr) => {
//   if (!Array.isArray(arr)) {
//     let errorMessage = 'Ошибка: переданный аргумент не является массивом';
//     console.log(errorMessage);
//     return errorMessage;
//     } else if (arr.length === 0) {
//       let emptyMessage = 'Семья пуста';
//       console.log(emptyMessage);
//       return emptyMessage;
//     } else {
//       const message = 'Семья состоит из: ' + arr.join(' ');
//       console.log(message);
//       return message;
//     }
// }
// showFamily(family);


//! Practice exercise Array # 4

//todo напишите функцию standardizeStrings, которая будет принимать в себя массив строк и
//todo будет выводить в консоль эти строки в нижнем регистре.
//todo Пример: standardizeStrings(favoriteCities)  выведет в консоль
//todo lisbon
//todo rome
//todo milan
//todo dublin

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// let resultCities = '';

// const standardizeString = (arr) => {
//   if (!Array.isArray(arr)) {
//     let errorMessage = 'Ошибка: переданный аргумент не является массивом';
//     console.log(errorMessage);
//     return errorMessage;
//   } else if (arr.length === 0) {
//     let emptyMessage = 'массив пустой';
//     console.log(emptyMessage);
//     return emptyMessage;
//   } else {
//     arr.forEach(city => {
//       resultCities +=`${city.toLowerCase()}\n`;
//     });
//   }
//   return resultCities;
// }
// standardizeString(favoriteCities);
// console.log(resultCities);

//! shot way of solution !!!!!!!!!!!

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// const standardizeStrings = (arr) => {
//     arr.forEach(city => console.log(city.toLowerCase()));
// }
// standardizeStrings(favoriteCities);



//! Practice exercise Array # 5

//todo Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку
//todo в обратном порядке. const someString = 'This is some strange string';
//todo reverse(someString) => 'gnirts egnarts emos si sihT'

// const someString = 'This is some strange string';

// const reverseStr = (str) => {
//   if (typeof str !== 'string') {
//     let errorMessage = 'Error!!! It is not a string!!!'
//     console.log(errorMessage);
//     return errorMessage;
//   } else {
//     let result = str.split('').reverse().join('');
//     console.log(result);
//     return result;
//   }
// }
// reverseStr (someString);


//! Practice exercise Array # 6

//todo У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах.
//todo Один банк основной с baseCurrencies, второй additionalCurrencies:
//todo Вам нужно создать главную функцию банкомата availableCurr, которая принимает два
//todo аргумента: первый - это массив со всеми доступными валютами из двух банков сразу
//todo (сейчас представим, что они не могут повторяться), второй - необязательный аргумент,
//todo который указывает ту валюту, которая сейчас закончилась в банкомате.
//todo Если массив в первом аргументе пустой - то функция возвращает строку
//todo 'Нет доступных валют'. Функция возвращает строку в нужном виде.
//todo Пример: availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'); Вернет строку:
// Доступные валюты:
// UAH
// RUB
//todo Заметьте:- CNY (юань) исчез из списка валют, значит такая валюта закончилась
//todo - После валюты: стоит перенос строки \n, и после каждой валюты тоже.
//todo - Данные для первого аргумента должны приходить сразу из двух банков,
//todo причем сначала baseCurrencies, потом additionalCurrencies по порядку

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// const availableCurr = (arr, missingCurr) => {
//   let resultStr = 'Available currencies are:\n';
//   for (let i =0; i < arr.length; i++) {
//     if (arr[i] === missingCurr) {
//       continue;
//     } else {
//       resultStr += `${arr[i]}\n`
//       console.log(resultStr);
//     }
//   }
// }
// availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD');

//! with arr.forEach(func => {})

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// const availableCurr = (arr, missingCurr) => {
//   if (arr.length === 0) {
//     let errorMessage = 'Нет доступных валют';
//     console.log(errorMessage);
//     return errorMessage;
//   }

//   let resultStr = 'Available currencies are:\n';
//   arr.forEach(currency => {
//     if (currency !== missingCurr) {
//       resultStr += `${currency} \n`;
//     }
//   });
//   console.log(resultStr);
//   return resultStr;
// }
// availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB');


//! arr.map !!!!!!!!!!!!!!!!!!!!!!!!!!!
// map не применим к объектам напрямую
// Но можно использовать его с массивом, созданным на основе ключей, значений или
// записей объекта
// const person = {
//   name: 'John',
//   age: '30'
// };

// const keys = Object.keys(person);
// const values = Object.values(person);
// const entries = Object.entries(person);

// console.log(keys.map(key => key.toUpperCase())); // Выводит: ['NAME', 'AGE']
// console.log(values.map(value => value * 2)); // Выводит: [NaN, 60] (так как имя не может быть умножено на 2)
// console.log(entries.map(([key, value]) => ({ [key]: value }))); // Выводит: [{ name: 'John' }, { age: 30 }]


//! arr.forEach !!!!!!!!!!!!!!!!!!!!!1
// const person = {
//   name: 'John',
//   age: '30'
// };

// Object.keys(person).forEach(key => console.log(key)); // Выводит: name, age

//! map and forEach => В этом примере, сначала мы используем метод map, чтобы преобразовать
//! каждый элемент массива values к верхнему регистру. Затем, с помощью метода forEach,
//! мы выполняем операцию console.log для каждого элемента нового массива.
//! Результатом будет вывод на консоль элементов массива values в верхнем регистру.

// const person = {
//   name: 'John',
//   age: '30'
// };

// const values = Object.values(person);
// values.map(value => value.toUpperCase()).forEach(value => console.log(value));


//! OOP Prototype Orientated Inheritance

// let str = 'someStr';
// let strObj = new String(str);

// console.log(str);
// console.log(strObj);

// console.dir([1,2,3]);

// const personalData = {
//   name: 'John',
//   age: 30,
//   address: {
//     city: 'New York',
//     country: 'USA'
//   }
// };
// console.dir(personalData);
// console.log(personalData);

// const soldier = {
//   health: 400,
//   armor: 100,
//   level: 3,
//   sayHello: function() {
//     console.log('Hello, I am ...');
//   }
// };

// const john = {
//   health: 100,
//   armor: 50
// };

// // john.__proto__ = soldier; // its old way DON'T USE IT

// Object.setPrototypeOf(john, soldier); //!!!!!!!!!!!!!!!!

// console.log(john);
// console.log(john.level);
// john.sayHello();

//! how it is in normal practice

// const john = Object.create(soldier);
// john.sayHello();

//! Lesson 37 Practice # 1
//todo 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте,
//todo что перед вами стоит задача переписать его так, чтобы все функции стали методами
//todo объекта personalMovieDB. Такое случается в реальных продуктах при смене
//todo технологий или подхода к архитектуре программы

//todo 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство
//todo privat. Если оно false - он переключает его в true, если true - переключает в false.
//todo Протестировать вместе с showMyDB.

//todo 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или
//todo оставлять пустую строку. Если он это сделал - возвращать его к этому же вопросу.
//todo После того, как все жанры введены - при помощи метода forEach вывести в консоль
//todo сообщения в таком виде: "Любимый жанр #(номер по порядку, начиная с 1) -
//todo это (название из массива)"

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         this.count = +prompt('How many films did you watch?', '');
        
//         while (this.count == '' || this.count == null || isNaN(this.count)) {
//             this.count = +prompt('Please insert number of films you watched!', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Insert title of one of the last seen films', '').toLowerCase().trim(),
//                   b = +prompt('Please rate the film in scale of 1 - 10', '');
                  
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 this.movies[a] = b;
//                 console.log('Done!');
//             } else {
//                 console.log('Error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (this.count < 10) {
//             console.log('You are an amature, too less films has been watched.');
//         } else if (this.count >= 10 && this.count < 30) {
//             console.log('You are a classic watcher!');
//         } else if (this.count >= 30) {
//             console.log('You are a kinoman!');
//         } else {
//             console.log('There is something went wrong!');
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(this);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (this.privat == true) {
//             this.privat = false;
//         } else {
//             this.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Your favorite genre is under number ${i}`).toLowerCase().trim();

//             if (genre === '' || genre == null) {
//                 console.log('You inserted wrong data or empty data');
//                 i--;
//             } else {
//                 this.genres[i - 1] = genre;
//             }

//             //! тернарный оператор => ternary operator
//             // (!genre || genre == null) ? (console.log('You inserted wrong data or empty data'), i--) : this.genres[i - 1] = genre;

//             //! alternative version with genres.split
//         // for (let i = 1; i < 2; i++) {
//         //     let genres = prompt(`Please insert favorite genres splited with comma`).toLocaleLowerCase().trim();
//         //     if (genres === '' || genres == null) {
//         //         console.log('Sorry, You have inserted wrong data! Try again!');
//         //         i--;
//         //     } else {
//         //         this.genres = genres.split(', ');
//         //         this.genres.sort(); // to sort by alphabet
//         //     }
//         // }
//        }
//         this.genres.forEach((item, i) => {
//             console.log(`Favorite genre number ${i + 1} - is ${item}`)
//         });
//     }
// };

// console.log(personalMovieDB.start());
// console.log(personalMovieDB.rememberMyFilms());
// console.log(personalMovieDB.detectPersonalLevel());
// console.log(personalMovieDB.showMyDB());
// console.log(personalMovieDB.toggleVisibleMyDB());
// console.log(personalMovieDB.writeYourGenres());


//! Practical excercise: 13 with method arr.reduce((acc, current) => acc + (current.a * current.b), 0); 
//todo У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте
//todo shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и
//todo ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и
//todo бюджет на оплату отопления за месяц.
//todo Основная задача - это написать функцию isBudgetEnough, которая буде возвращать
//todo строку. Если бюджета хватает для отопления всего объема торгового центра -
//todo выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂
//todo Но эта задача содержит несколько подзадач внутри:
//todo - вычисление общей площади всех магазинов, которая вычисляется как длина магазина,
//todo умноженная на его ширину;
//todo - вычисление общего объема торгового центра, так как цена отопления указана в
//todo кубических метрах;
//todo - определение того, хватает ли бюджета на оплату такого объема;
//todo - все числа идут без единиц измерения для упрощения, просто цифры и все;
//todo - функция должна продолжать работать, даже если изменяется количество магазинов,
//todo высота, бюджет или подставляется вообще другой объект.

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// let result;

// const isBudgetEnough = (data) => {
//     const totalArea = data.shops.reduce((acc, shop) => acc +(shop.width * shop.length), 0);
//     const totalVolume = totalArea * data.height;
//     const totalCost = totalVolume * data.moneyPer1m3;

//     if (totalCost <= data.budget) {
//         result = 'The budget is ENOUGH!'
//     } else {
//         result = 'The budget is NOT enough!!!'
//     }
//     console.log(result);
//     return result;
// }
// isBudgetEnough(shoppingMallData);


//todo Write the function camelize(str) that changes dash-separated words like
//todo “my-short-string” into camel-cased “myShortString”. That is: removes all dashes,
//todo each word after dash becomes uppercased.

//! more practice with .split and .join

// const strExample = 'my-short-string';

// const camelize = (str) => {
//     let strToArray = str.split('-');
//     console.log(strToArray);
//     let arrToUpperCase = strToArray.map((word, index) => {
//         if (index === 0) {
//             return word;
//         } else {
//             return word[0].toUpperCase() + word.slice(1);
//         }
//     });
//     let result = arrToUpperCase.join('');
//     console.log(result);
//     return result;
// }
// camelize(strExample);

//! SHORT way

// const strExample = 'my-short-string-done-correctly';

// const camelize = (str) => {
//     console.log(str.split('-').map((word, index) => {
//         if (index === 0) {
//             return word;
//         } else {
//             return word[0].toUpperCase() + word.slice(1);
//         }
//     }).join(''))
// }

// camelize(strExample);

//! MORE SHORT way !!!!!!!

// const strExample = 'my-short-string-done-correctly-look-at-this';

// const cemalize = (str) => {
//     return console.log(str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''))
// }
// cemalize(strExample);


//todo Write a function filterRange(arr, a, b) that gets an array arr, looks for elements
//todo with values higher or equal to a and lower or equal to b and return a result as
//todo an array. The function should not modify the array. It should return the new array.

// let arr1 = [5, 3, 8, 1];

// const filterRange = (arr, a, b) => {
//     let result = [];
//     arr1.map((item) => {
//         if (item >= a && item <= b) {
//             result.push(item)  
//         }
//     })
//     console.log(result)
//     return result;
// }
// filterRange(arr1, 1, 4);

//! Short way with arr.filter!!!!!!!!!!!!!!!!!!
// let arr1 = [5, 3, 8, 1];

// const filterRange = (arr, a, b) => (arr.filter((item) => item >= a && item <= b ))
// console.log(filterRange(arr1, 1, 4));
// console.log(arr1);


//todo Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes
//todo from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//todo The function should only modify the array. It should not return anything.

//! solving with arr.forEach((num, index) =>)

// let arr1 = [5, 3, 8, 1];

// const filterRangeInPlace = (arr, a, b) => {
//     arr.forEach((item, index) => {
//         if (item < a || item > b) {
//             arr.splice(index, 1); // Remove the element at index
//         }
//     });
// }
// filterRangeInPlace(arr1, 1, 4);
// console.log(arr1);

//! Sort in decreasing order!!!!!!!!!!!!!!!!!
//todo sort the array in decreasing order

// let arrToSort = [5, 2, 1, -10, 8];

// const toSortArray = (arr) => {
//     arr.sort().reverse();
//     console.log(arr)
// }
// toSortArray(arrToSort);

//! Shorter way to sort and revers

// let arrToSort = [5, 2, 1, -10, 8];

// const toSortInDecreasing = (arr) => {
//     arr.sort((a, b) => b - a);
//     console.log(arr);
// }
// toSortInDecreasing(arrToSort);


//! Copy and sort array
//todo We have an array of strings arr. We’d like to have a sorted copy of it, but keep
//todo arr unmodified. Create a function copySorted(arr) that returns such a copy

// let arrStr = ["HTML", "JavaScript", "CSS"];
// let arrSorted =[];

// const sortArray = () => {
//     arrSorted = [...arrStr].sort();
// }
// sortArray(arrStr);
// console.log(arrSorted);
// console.log(arrStr);


//! Creat an extandable calculator
//todo Create a constructor function Calculator that creates “extendable” calculator
//todo objects. The task consists of two parts.
//todo 1) First, implement the method calculate(str) that takes a string like "1 + 2"
//todo in the format “NUMBER operator NUMBER” (space-delimited) and returns the result.
//todo Should understand plus + and minus -.

// const Calculator = {
//     calculate: function(str) {
//         return Number(str);
//     } 
// }
// console.log(Calculator.calculate('1+3'));

//!!!!!!!!!!!!!!!!!!!!!Class Calculator!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// class Calculator {
//     calculate(str) {
//         const [num1, operator, num2] = str.split(/\s+/);
//         const n1 = Number(num1);
//         const n2 = Number(num2);

//         switch (operator) {
//             case '+':
//                 return n1 + n2;
//             case '-':
//                 return n1 - n2;
//             case '*':
//                 return n1 * n2;
//             case '/':
//                 return n1 / n2;
//             case '**':
//                 return n1 ** n2;
//             default:
//                console.log('Invalid operator!!!');
//         }
//     }
// }

// let calc = new Calculator();
// console.log(calc.calculate("3 + 2"));


//! Split every SYMBOL separately except space!!!!!!!!!!!!!!!
// const str = "11 - 30    * 4 ARAFSFSfdsf      fsf JavaScript";
// const parts = str.split(/\s+/).filter(symbol => symbol.trim() !== '');
// console.log(parts);

//! Calculator with split method 

// function Calculator() {

//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b,
//       "*": (a, b) => a * b,
//       "/": (a, b) => a / b,
//       "**": (a, b) => a ** b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];
  
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return "Wrong input data!!!";
//       }
  
//       return this.methods[op](a, b);
//     };
  
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }
//   let calc = new Calculator;
//   console.log(calc.calculate("3 ** 2"));


//! Map to names
//todo You have an array of user objects, each one has user.name. Write the code that
//todo converts it into an array of names.

// let john = { name: "John",
//              age: 25 };
// let pete = { name: "Pete",
//              age: 30 };
// let mary = { name: "Mary",
//              age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((item) => item.name);

// console.log(names);


//! Map to objects
//todo You have an array of user objects, each one has name, surname and id. Write the
//todo code to create another array from it, of objects with id and fullName, where
//todo fullName is generated from name and surname. So, actually you need to map one
//todo array of objects to another. Try using => here. There’s a small catch.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

// let usersMapped = users.map((item) => )