//Funkcje mo¿na wywo³ywaæ z konsoli
// let - w klauzuli { }, var - w calej funkcji
//#############################################################################
var a = function () {
    console.log("Funkcja anonimowa");
}
//a();
//#############################################################################
var a = function funkcjaA() {
    console.log("Funkcja");
}
//#############################################################################
function funkcjaSong(song) {
    console.log(song);
}
//funkcja("spiewanko");
//#############################################################################
function multiply(a, b) {
    //console.log(a * b);
    return a * b;
}
//multiply(2, 5);
//#############################################################################
//callback - obojetnie jaka nazwa w parametrze (funkcja w funkcji)
function logA(callback) {
    setTimeout(() => {
        console.log('a');

        const value = "wartosc a";

        callback(value)
    }, 1000)
}

function logB(param) {
    console.log('b');
    console.log(param);
}
//logA(logB);
//#############################################################################
//tablica - callback
const array = [1, 5, 7, 2].map(element => {
    return element * 2;
})
//const array = [1, 5, 7, 2].map(element => element * 2)
//console.log(array);

const tab = [1, 2, 5, 8];
const add = element => element + 5;

const funTab = (tab, callback) => {
    for (let i = 0; i < tab.length; i++) {
        tab[i] = callback(tab[i]);
    }
}
//funTab(tab, add);
//console.log(tab);
//#############################################################################
//Logowanie , mo¿na tworzyæ funkcje w obiektach i tablicach
var database = [
    {
        username: "admin",
        password: "admin",
        optional: function () {
            console.log("optional");
        }
    },
    {
        username: "aaa",
        password: "111",
    },
    {
        username: "bbb",
        password: "222",
    }
];

var userNews = [
    {
        username: "Bobby",
        timeline: "Jojo"
    },
    {
        username: "Ania",
        timeline: "Eloelo"
    }
];

//var userNamePrompt = prompt("Your name?");
//var passwordPrompt = prompt("Your password?");

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            if (database[i] === database[0]) { console.log(database[0].optional()); }
            //console.log(userNews);
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(userNews);
    } else {
        alert("Wrong login or pass!");
    }
}

//function signIn(user, pass) {
//    if (user === database[i].username && pass === database[i].password) {
//        //console.log(database[0].optional());
//        console.log(userNews);
//    } else {
//        alert("Wrong pass!");
//    }
//}

//signIn(userNamePrompt, passwordPrompt);
//#############################################################################

var todos = ["a", "b", "c", "d", "e", "f"];
var todosShout = ["a!", "b!", "c!", "d!", "e!"];
//for (let i = 0; i < todos.length; i++) {
//    console.log(todos[i]);
//}

//todos.forEach(function (todos, i){
//    console.log(todos, i)
//})

function logTodos(wartosc, indeks) {
    console.log(wartosc, indeks);
}
//todos.forEach(logTodos);