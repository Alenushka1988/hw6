//Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
//for(let num=0; num<=10; num +=2){
    
  //  console.log(num);}
//Напишите цикл for, который выводит в консоль  все числа от 55 до 20
//Дан массив numbers. Вывести в консоль все числа из массива

//const numbers = [3, 5, 11, 2, 8, 1, 6];


//Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
//for(let i=55; i>=20; i--){
  //  console.log(i);

//}
//for(let i=0; i<numbers.length; i++){
  //  console.log(numbers[i]);}

//const numbers_squared = [];
//for(let i=0; i < numbers.length; i++){
  //  numbers_squared.push(numbers[i]**2);}
//console.log(numbers_squared);


//Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
//const last_elem = numbers_squared[numbers_squared.length -1];
//console.log(last_elem);


//Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = {
    first_name:  'Ivan',  
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
}
const {first_name, last_name,age} = user;
const userString =`User’s name is ${first_name} ${last_name}. He is ${age} years old.`;
console.log(userString);


