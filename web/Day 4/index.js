var g = "mine is big"  //global scope

var b = 'i am b string'

function sayHello () {
    console.log('hello world');
}

sayhello ();

var adder = function(a,b)
console.log(a+b);
}

var sum = 1+2;

adder (9,7);  //local scope

const multiplyer = (x,y) => {
    console.log (x*y)

multiplyer (2,5); //output is 10

const logger = (g) => {  //g is a local variable despite its a global shown on top
    console.log(g)
}

logger(g);

let number = 8.9685427845

const twoDecimalPlaces = (x)=>{
    console.log(number(x))
}

