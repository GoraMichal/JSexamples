//#################################################
//Child scope always has access to the parent scope!!! Parent hasn't access to the children scope!

const first = () => {
    const text = 'Hi';
    const second = () => {
        alert(text);
    }
    return second
}

//const first = () => {
//    var text = 'Hi';
//    function second() {
//        alert(text);
//    }
//    return second
//}

var newFunction = first();
//newFunction();

//################################################# Currying - multiple arguments
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b; //curriedMultiply(2)(3) = 6
const multiplyBy10 = curriedMultiply(10);// multiplyBy10(5) = 50

const compose = (f, g) => (a) => f(g(a));
const sum = (number) => number + 1;
compose(sum, sum)(10); // 12
compose(sum, sum)(19); // 21

//#################################################

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // 31


const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // 17


const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // 16