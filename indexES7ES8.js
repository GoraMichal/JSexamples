//######################################### ES7
'check'.includes('check'); //true
'check'.includes('checkk'); //false

const fruits = ['apple', 'banana', 'grape'];
//console.log(fruits.includes('banana'));

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
//return name or names in an array
dragons.filter(name => name.includes('Sandy'))
//check if array includes the name 
dragons.includes('Och') 

//############
const square = (x) => x ** 2; // for 2 = 4
const cube = (x) => x ** 3; // for 3 = 27, for 4 = 64
const xxxx = (x) => x ** 4; // for 2 = 16
const xxpp = (x) => x *+ 4; // for 2 = 8
const xxmm = (x) => x *- 4; // for 2 = -8

//######################################### ES8
//.padStart() .padEnd()
'something'.padStart(15); // 15 spacji przed tekstem

let turtle = '🐢';
turtle = turtle.trim().padEnd(9, '='); //🐢=======
turtle = turtle.padEnd(9, '=');
//############
const funkcja = (a, b, c, d,) => {
	console.log(a);
}
funkcja(1, 2, 3, 4);

//############
Object.values
Object.entries
Object.keys

let obj = {
	name0: 'Ala',
	name1: 'Ola',
	name3: 'Tomek'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('name', '');
})

//Async, Await

https://medium.com/@xoor/whats-new-in-es2018-es9-a122b53e56a4

https://medium.com/@selvaganesh93/javascript-whats-new-in-ecmascript-2019-es2019-es10-35210c6e7f4b