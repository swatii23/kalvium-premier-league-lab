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
function filterByDebut(year) {
  return players.filter(player => player.debut == year)
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  return players.filter(player => player.position == position)
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  return players.filter(player => player.awards.some(award => award.name == awardName))
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  const reqPlayers = filterByAward(awardName)
  return (reqPlayers.filter(player => 
    player.awards.length == noOfTimes
    ))
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  const reqPlayers = filterByAward(awardName)
  return reqPlayers.filter(player => player.country == country)
}


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(awardName, team, ageReq) {
  const reqPlayers = filterByAward(awardName)
  return reqPlayers.filter(player => player.team == team && player.age < ageReq)
}


//Progression 9 - Sort players in descending order of their age
function SortByAge(players) {
  return players.sort((a, b) => b.age - a.age)
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
const FilterByTeamxSortByNoOfAwards = (team) => {
  const teamPlayers = players.filter(player => player.team === team);
  return teamPlayers.sort((a, b) => b.awards.length - a.awards.length);
};

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
const SortByNamexAwardxTimes = (awardName, times, country) => {
  const filteredPlayers = filterByAwardxTimes(awardName, times).filter(player => player.country === country);
  return filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));
};

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
const SortByNamexOlderThan = (age) => {
  const filteredPlayers = players.filter(player => player.age > age);
  return filteredPlayers.sort((a, b) => {
    const latestA = Math.max(...a.awards.map(award => award.year));
    const latestB = Math.max(...b.awards.map(award => award.year));
    return latestB - latestA;
  });
}