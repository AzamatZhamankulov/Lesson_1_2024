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
//         const a = prompt('Insert title of one of the last seen films', '').trim(), // delete for empty space
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


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is under number ${i}`).trim();
//     }
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


//! sprade operator!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
let obj3 = { 
    a: 1,
    b: { 
      c: 2,
    },
  }
  let newObj3 = JSON.parse(JSON.stringify(obj3));
   
obj3.b.c = 20;
newObj3.b.c = 55;
console.log(obj3); // { a: 1, b: { c: 20 } }
console.log(newObj3); // { a: 1, b: { c: 55 } }