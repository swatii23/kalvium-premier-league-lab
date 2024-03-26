//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(name, age, team, trophy) {
  return [name, age, team, trophy];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  return {
    defender: formation[0], 
    midfield: formation[1], 
    forward: formation[2]
  };
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

// {
//   name: "Luka Modric",
//   age: 33,
//   debut: 2006,
//   team: "Real Madrid",
//   position: "Midfielder",
//   country: "Croatian",
//   url:
//     "https://media.guim.co.uk/737d9bde5b3cf33b0230c887acfadf9e68c427bd/169_141_3371_2023/500.jpg",
//   awards: [
//     {
//       name: "The Best FIFA Men's Player",
//       year: 2016
//     },
//     {
//       name: "Ballon",
//       year: 2018
//     },
//     {
//       name: "The Best FIFA Men's Player",
//       year: 2018
//     }
//   ]
// }

//Progression 3 - Filter players that debuted in ___ year
function filterYear(player, year) {
  return players.filter(player => player.debut)
}

//Progression 4 - Filter players that play at the position _______
function filterPosition(params) {
  
}

//Progression 5 - Filter players that have won ______ award
function filterAward(params) {
  
}

//Progression 6 - Filter players that won ______ award ____ times
function filterAwardTime(params) {
  
}

//Progression 7 - Filter players that won ______ award and belong to ______ country


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
