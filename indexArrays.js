const array = [1, 2, 3, 4, 8];

const doubleArray = [];
const oprationOnArray = array.forEach((num) => { doubleArray.push(num * 2) });
//console.log(doubleArray);

//const mapArrayDouble = array.map((num) => {
//    return num * 2; //bez return = undefined
//})

const mapArrayDouble = array.map(num => num * 2)
//console.log(mapArrayDouble);

const mapIndex = array.map((num, i) => { return i });
//console.log('map index',mapIndex);

const filterArray = array.filter(num => { return num > 1 })
//console.log('filter', filterArray);

const reduceArray = array.reduce((acc, num) => {
	return acc + num;
}, -100);
//console.log('reduce array', reduceArray);

//########################################################

const arrayObjects = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},
];

//tablica w tablicy
const allitems = arrayObjects.map(user => {
	user.items = user.items.map(item => {
		return item + "!";
	})
	return user.items[0];
});
console.log(allitems);


const answer = arrayObjects.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
//console.log(answer);

let newArray = []
arrayObjects.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
//console.log(newArray);

const mapArray = arrayObjects.map(user => {
	let { username } = user;
	return username + "?";
})
//console.log(mapArray);