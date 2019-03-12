// function Food(type) {
//     this.food = type;
        

// }

// Food.prototype.taste = 'tasty';

// var candy = new Food('candy');
// var noodles = new Food('noodles');

// // candy.taste; // 'tasty'
// // noodles.taste; // 'tasty'

// // Food.prototype.taste = 'awful';

// // candy.taste; // 'awful'
// // noodles.taste; // 'awful'

// var food = {
//     candy : {
//         taste: 'tasty'
//     },
//     noodles : {
//         taste: 'tasty'
//     }
// }



// food.candy.taste = 'awful'

// console.log(food.candy.taste);

// console.log(food.noodles.taste);

// var dog = {
//     nickname: "Benji",
//     call() {
//         console.log("first call nickname is showing => " + this.nickname);
//         function secondCall() {
//             console.log("second call nickname is undefined => " + this.nickname);
//         }
//         secondCall();
//     }
// }

// dog.call(); 


// var dog = {
//     nickname: 'Benji',
//     call() {
//         var props = this;
//         function secondCall() {
//             console.log("Come here" + props.nickname);
//         }
//         secondCall();
//     }
// }
// dog.call(); // logs 'Come here Benji'

function Food(type) {
    this.food = type;
}

var carrot = new Food('carrot'); 



class Car {
    constructor(options) {
        this.type = options.type;
        this.speed = options.speed;
        this.seatingCapacity = options.seatingCapacity;
        this.color = options.color;
    }

    drive() {
        console.log('vroom at ' + this.speed);
    }

    stop () {
      console.log('oh it halted!')
    }
}

const car = new Car({ type: 'pickup', speed: 9000, seatingCapacity: 6, color: 'red'});
car.stop() // 'vroom'
console.log(car.type); // 'pickup'