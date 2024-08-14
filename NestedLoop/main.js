/*
// For Loop
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
 console.log(rapperArray[i])
}

//==========================================

// Write your code below
const bobsFollowers = ["Kwaku", "Paul", "Promise", "Kwame"];
const tinasFollowers = ["Nora", "Paul", "Kwame"];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log(mutualFollowers.push(bobsFollowers[i]));
    }
  }
}
  //=================================================
// WHILE LOOP
const cards = ["diamond", "spade", "heart", "club"];

// Write your code below
let currentCard;
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//==================================================
//DO LOOP
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

// do {
//   cupsAdded++;
//   console.log(cupsAdded + " Number of cups Needed");
// let cupsOfSugarNeeded = 5;
// let cupsAdded = 0;
// }
//=========================================
do {
  cupsAdded++;
  console.log("Adding cup of sugar...");
  console.log("Total cups added: " + cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

console.log("Baking process complete!");

//========================================================

// Adding Break to your loops
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  if (i > 2) {
    break;
  }
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.");
const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return num;
  } else console.log("inconsistent results");
};
console.log(checkConsistentOutput(addTwo, 2));
console.log();


const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((randomNumbers) => {
  return randomNumbers.length < 250;
});

console.log(smallNumbers);

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((elephant) => {
  return elephant;
});


const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((findelement) => {
  return findelement === "elephant";
});

const startWithS = animals.findIndex((finds) => {
  return finds[0] === "s";
});
*/

const person = { name: "Paul", age: 25, country: "Ghana" };
function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}
