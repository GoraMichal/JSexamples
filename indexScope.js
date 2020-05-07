//Root scope
var x = 15;

function xFun() {
    //Children scope
    var x = "xFun";
    console.log(1, x);
}

function xxFun() {
    //Children scope
    var x = "xxFun";
    console.log(2, x);
}

function xxxFun() {
    //Children scope
    x = "xxxFun";
    console.log(3, x);
}

//console.log("window", x)
//console.log(x); //15
//console.log(xFun()); //xFun
//console.log(xxFun()); //xxFun
//console.log(xxxFun()); //xxxFun
////xxxFun();
//console.log(x); //xxxFun - bo nie ma var

//######################################################### let + const

const player = "Tom";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true; //true
}

//console.log(wizardLevel); //false

//######################################################### Destructuring

const obj = {
    user: 'tom',
    exp: 100,
    unique: false
}

//const player = obj.player;
//const experience = obj.experience;
//let wizardLev = obj.wizardLev;

const { user, exp } = obj;
let { unique } = obj;

//obj.exp;

//######################################################### Object properties

const qwerty = 'aleksander wielki';

const obiekt = {
    [qwerty]: 'hello',
    [1 + 2]: 'bywaj'
}

//{3: "bywaj", aleksander wielki: "hello"}

//######################################################### Object properties

const a = "Sam";
const b = true;
const c = {};

//mozna usun¹æ deklaracje w³ascioœci i zostawiæ wartoœci, je¿eli s¹ takie same
const abc = {
    a,
    b,
    c
}

//######################################################### Tempalte strings
const flower = "Rose";
const color = "green";
const tree = "palm";

const greenText = `${flower} is red, ${tree} is ${color}.`; //apostrof pod tylda

//######################################################### Tempalte strings
function greenTextFunction(flower = '', color = 'green', count = 10) {
    return `How many ${flower} do you have. Only ${count}`;
}

//######################################################### Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//######################################################### Arrow Functions

function add(val1, val2) {
    return val1 + val2;
}

const add2 = (val1, val2) => val1 + val2;