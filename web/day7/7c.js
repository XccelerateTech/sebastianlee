class Person {
    constructor(options) {
        this.age = options.age;
        this.weight = options.weight
    }

    get Age() {
        console.log( `I am ${this.age} years old.`)
    }

    set Age(age) {
        this.age = age;
    }
      get Weight() {
        console.log( `I am ${this.weight} kg.`)
    }

    set Weight(weight) {
        this.weight = weight;
    }
}

var person = new Person({age: 22, weight: 400});

person.Age;
person.Age = 100;

person.Age;
person.Weight;