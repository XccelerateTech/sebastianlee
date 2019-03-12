// Imagine you want to develop a game.   In this game you have monsters.   Create a class with the name ‘Monster’.   In the constructor of this class do some basic setup. The monster has health and a name.

// initialize the Monster’s health by giving it a health of 100
// the constructor will receive an options object. This object has a property name on it. Use this object to give the Monster a name.
// give that monster a method called wounded, that takes one parameter. The parameter reduces the monsters health. If health is 0 console.log(‘monster dead’);
// create a function separate from the class 'Monster', named hero that calls the wounded method with a random number between 5-20.
// initialize the monster and try to kill it.

class Monster {
    constructor (options) {
        this.health= options.health;
    }

    

}