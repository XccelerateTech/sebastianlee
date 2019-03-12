Imagine you are game developer.   Create a Player constructor function with

a name and health property
an attack method which takes away 10 health per attack
initialize two players
Write a function that randomly decides which player attacks. Math.random() could be handy. After each attack console.log who won.
Let both players fight until one has 0 health left, the other player should now win. Console.log the winner.

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  
  function Player (name, health) {
      this.name = name;
      this.health = health;
  }
  
  Player.prototype.attack = function (opponent) {
      opponent.health -= 10;
  };
  
  var federer = new Player ('federer', 100);
  var nadal = new Player ('nadal', 100);
  
  while (federer.health > 0 && nadal.health > 0){
      let turn = getRandomInt(2);
      console.log(turn)
  
      if(turn == 1){
        federer.attack(nadal)
        console.log(`nadal was hit  he has  ${nadal.health}.`)
      } else if (turn == 0){
        nadal.attack(federer)
        console.log(`federer was hit he has ${federer.health}.`)
      }
  }
  
  if(federer.health == 0){
  console.log(`federer is dead`)
  } else if (nadal.health == 0){
    console.log (`nadal is dead.`)
  }
  