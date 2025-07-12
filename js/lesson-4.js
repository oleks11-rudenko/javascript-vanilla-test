// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// console.log(document.querySelector('body'));
// console.log('');
// console.log(document.querySelector('#title'));
// console.log('');
// console.log(document.querySelector('.list'));
// console.log('');
// document.querySelectorAll('[data-topic]').forEach(topic => console.log(topic));
// console.log('');
// console.log(document.querySelector('[data-topic="navigation"]'));
// console.log('');
// console.log(document.querySelector('[data-topic="manipulation"]'));
// console.log('');
// console.log(document.querySelector('.list'));
// console.log('');
// document.querySelectorAll('h3').forEach(topic => console.log(topic));
// console.log('');
// document.querySelectorAll('h3').forEach(topic => topic.classList.add('active'));
// console.log();
// console.log(document.querySelector('[data-topic="navigation"]'));
// console.log('');
// document.querySelector('[data-topic="navigation"]').style.backgroundColor =
//   'yellow';
// console.log();
// document.querySelector('[data-topic="navigation"] p').textContent =
//   'Я змінив тут текст!';
// console.log();
// const currentTopic = 'manipulation';
// console.log(document.querySelector(`[data-topic="${currentTopic}"]`));
// console.log('');
// document.querySelector(`[data-topic="${currentTopic}"]`).style.backgroundColor =
//   'blue';
// console.log();
// console.log(document.querySelector('.completed'));
// console.log('');
// document.querySelector('.completed').remove();
// console.log();
// document
//   .querySelector('#title')
//   .insertAdjacentHTML(
//     'afterend',
//     "<p>Об'єктна модель документа (Document Object Model)</p>"
//   );
// console.log();
// document
//   .querySelector('.list')
//   .insertAdjacentHTML(
//     'beforeend',
//     '<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>'
//   );
// console.log();
// document.querySelector('.list').remove();

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const numberContainer = document.querySelector('.number-container');
// for (let i = 1; i <= 100; i++) {
//   const currentRandomNumber = randomNumber();
//   numberContainer.insertAdjacentHTML(
//     'beforeend',
//     `<div class='${
//       currentRandomNumber % 2 === 0 ? 'even' : 'odd'
//     }'>${currentRandomNumber}</div>`
//   );
// }

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const input = document.querySelector('.js-username-input');

// const handleInput = event => {
//   if (event.target.value.length > 6) {
//     input.classList.remove('error');
//     input.classList.add('success');
//   } else {
//     input.classList.remove('success');
//     input.classList.add('error');
//   }
// };

// input.addEventListener('input', handleInput);

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// const handleFocus = event => {
//   if (event.target.value.trim() === '') {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid green';
//   }
// };

// input.addEventListener('focus', handleFocus);

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// const handleBlur = event => {
//   if (event.target.value.trim() === '') {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid green';
//   }
// };

// input.addEventListener('blur', handleBlur);

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const form = document.querySelector('.js-contact-form');
// const output = document.querySelector('.js-username-output');

// const handleSubmit = event => {
//   event.preventDefault();

//   const checkbox = document.querySelector('.js-policy-checkbox').checked;

//   if (!input.value.trim()) {
//     alert('Будь ласка, заповніть текстове поле!');
//     return;
//   }

//   if (!checkbox) {
//     alert('Будь ласка, погодьтесь з умовами!');
//     return;
//   }

//   console.log({ name: input.value.trim(), isChecked: checkbox });

//   event.target.reset();
// };

// const handleInput = event => {
//   if (event.target.value.trim()) {
//     output.textContent = event.target.value.trim();
//   } else {
//     output.textContent = 'Anonymous';
//   }
// };

// form.addEventListener('submit', handleSubmit);

// input.addEventListener('input', handleInput);

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const box = document.querySelector('.box');
// const decrease = document.querySelector('.js-decrease');
// const increase = document.querySelector('.js-increase');

// function getCurrentSize() {
//   const style = window.getComputedStyle(box);
//   return parseInt(style.getPropertyValue('width'));
// }

// function setSquareSize(size) {
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
// }

// const handleDecrease = () => {
//   const currentSize = getCurrentSize();
//   const newSize = Math.max(20, currentSize - 20);
//   setSquareSize(newSize);
// };

// const handleIncrease = () => {
//   const currentSize = getCurrentSize();
//   const newSize = currentSize + 20;
//   setSquareSize(newSize);
// };

// decrease.addEventListener('click', handleDecrease);
// increase.addEventListener('click', handleIncrease);
