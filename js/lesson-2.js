// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// styles[styles.indexOf('blues')] = 'classic';

// function logItems(array) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(`${index + 1} - ${element}`);
//   }
// }

// console.log(logItems(styles));

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const requestUsername = prompt("Введіть ім'я користувача");
//   if (array.includes(requestUsername)) {
//     return alert(`Welcome, ${requestUsername}!`);
//   }
//   return alert('User not found');
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//   let totalArgsAmount = 0;
//   for (const element of args) {
//     if (typeof element === 'number') {
//       totalArgsAmount += element;
//     } else {
//       return 'У колекції одне із значень не число!';
//     }
//   }
//   if (totalArgsAmount !== 0) {
//     return totalArgsAmount;
//   }
//   return 'Колекція порожня!';
// }

// console.log(caclculateAverage());
// console.log(caclculateAverage(1, 2, 3));
// console.log(caclculateAverage(1, 11, '23', 2323, 234));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumOfPair(numbers) {
//   const result = [];
//   for (let i = 0; i < numbers.length - 1; i++) {
//     result.push(numbers[i] + numbers[i + 1]);
//   }
//   return result;
// }

// console.log(sumOfPair(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, -1, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     let minNum = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] < minNum) {
//         minNum = numbers[i];
//       }
//     }
//     return minNum;
//   }
//   return 'Sory, it is not an array!';
// }

// console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// function findLongestWord(string) {
//   const refactoredString = string.split(' ');
//   let longestWord = refactoredString[0];
//   for (const e of refactoredString) {
//     if (e.length > longestWord.length) {
//       longestWord = e;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// for (const element of Object.keys(user)) {
//   console.log(`${element}:${user[element]}`);
// }

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function calcSumofSalaries(salaries) {
//   let sum = 0;
//   if (salaries !== null) {
//     for (const element of Object.values(salaries)) {
//       sum += element;
//     }
//   }
//   return sum;
// }

// const sum = calcSumofSalaries(salaries);
// console.log(sum);

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read: function (a, b) {
//     (this.a = a), (this.b = b);
//   },

//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     }
//     return 'No such propeties';
//   },

//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     }
//     return 'No such propeties';
//   },

//   exist() {
//     if (!this.a || !this.b) {
//       return false;
//     }
//     return true;
//   },
// };

// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());
// calculator.read(3, 4);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let commonAmount = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       commonAmount += fruit.price * fruit.quantity;
//     }
//   }
//   return commonAmount;
// }

// console.log(calcTotalPrice(fruits, 'Банан'));
