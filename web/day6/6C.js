// Use .filter() to filter out all of the Barcelona players, returning the names of the players in the other clubs.

// Create an array with the names of all the players.

var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

     let newArry = [];

var result = players.filter(function(players) {
 if(players.club !== 'FC Barcelona'){
     newArry.push(players.name) 
 }
})

console.log(newArry);