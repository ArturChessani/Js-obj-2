

// 1. создайте объект со структурой и заполните данными спросите у пользователя:
// {
// id,
// firstname,
// lastname,
// age,
// }

// const obj = {
//   id: prompt("Введите свой id"),
//   firstname: prompt("Введите свою имя"),
//   lastname: prompt("Введите свою фамилию"),
//   age: Number(prompt("Введите свой возраст"))
// };
// console.log(obj);

// 2. Создайте обьект-лифт
// свойство хранящее текущий этаж, и метод смены этажа

// const lift = {
//   floor: 0,
//   floorUp: function () {
//     this.floor++;
//     console.log(`Вы поднялись на ${lift.floor} этаж.`);
//   },
//   floorDown: function () {
//     this.floor--;
//     console.log(`Вы спустились на ${lift.floor} этаж.`);
//   },
// };

// console.log(`Вы сейчас на ${lift.floor}-ом этаже.`);
// lift.floorUp();
// lift.floorUp();
// lift.floorUp();
// console.log(`Вы сейчас на ${lift.floor}-ом этаже.`);
// lift.floorDown();
// lift.floorDown();



// 3. Клонировать обьект A и на его основе создать клон B
// const objectA = {
//   firstname: 'Ivan',
//   lastname: 'Ivanov',
//   age: 56
// }

// const clon = Object.assign({}, objectA);
// clon.id = 33;

// console.log(clon)


// 4. Создать _шаблон_ обьекта Пользователь.
// Принимать параметры - username, age, isMale, password.
// function User(username, age, isMale, password) {
//   this.username = username;
//   this.age = age;
//   this.isMale = isMale;
//   this.password = password;
// }

// console.log(new User('Ivan', '44', 'true', 'Ivan_44'));