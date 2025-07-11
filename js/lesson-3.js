// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map(number => number ** 2));

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// console.log(data.flatMap(item => item.values));

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// console.log(people.some(item => item.age < 20));

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// console.log(numbers.every(number => number % 2 === 0));

// Знайдіть перше непарне число
// const numbers = [2, 1, 6, 8, 9, 10, 12];
// console.log(numbers.find(number => number % 2 !== 0));

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// console.log(
//   numbersArray.toSorted((firstNum, secondNum) => firstNum - secondNum)
// );

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// console.log(
//   stringArray.toSorted((firstWord, secondWord) =>
//     firstWord.localeCompare(secondWord)
//   )
// );

// Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// console.log(
//   users.toSorted((firstUser, secondUser) => firstUser.age - secondUser.age)
// );

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// console.log(users.filter(user => user.age > 20));

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reduce((total, number) => total + number, 0));

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   initialValue;

//   number(value) {
//     this.initialValue = value;
//     return this;
//   }

//   getResult() {
//     return this.initialValue;
//   }

//   add(value) {
//     this.initialValue += value;
//     return this;
//   }

//   subtract(value) {
//     this.initialValue -= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       throw new Error('Число не можна поділити на 0.');
//     }
//     this.initialValue /= value;
//     return this;
//   }

//   multiply(value) {
//     this.initialValue *= value;
//     return this;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(params) {
//     super(params.name, params.age, params.gender, params.email);
//     this.salary = params.salary;
//     this.department = params.department;
//   }

//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// // Створюємо екземпляр Person
// const person = new Person('Іван', 30, 'чоловік', 'ivan@example.com');

// // Перевіряємо, чи правильно заповнені поля
// console.log(person.name); // "Іван"
// console.log(person.age); // 30
// console.log(person.gender); // "чоловік"
// console.log(person.email); // "ivan@example.com"

// // Перевіряємо метод getDetails()
// const personDetails = person.getDetails();
// console.log(personDetails); // { name: "Іван", age: 30, gender: "чоловік", email: "ivan@example.com" }

// // Створюємо екземпляр Employee
// const employee = new Employee({
//   name: 'Марія',
//   age: 25,
//   gender: 'жінка',
//   email: 'maria@company.com',
//   salary: 50000,
//   department: 'IT',
// });

// // Перевіряємо успадковані поля від Person
// console.log(employee.name); // "Марія"
// console.log(employee.age); // 25
// console.log(employee.gender); // "жінка"
// console.log(employee.email); // "maria@company.com"

// // Перевіряємо власні поля Employee
// console.log(employee.salary); // 50000
// console.log(employee.department); // "IT"

// // Перевіряємо метод getDetails() (успадкований від Person)
// const employeePersonDetails = employee.getDetails();
// console.log(employeePersonDetails); // { name: "Марія", age: 25, gender: "жінка", email: "maria@company.com" }

// // Перевіряємо метод getEmployeeDetails()
// const employeeDetails = employee.getEmployeeDetails();
// console.log(employeeDetails); // { salary: 50000, department: "IT" }
