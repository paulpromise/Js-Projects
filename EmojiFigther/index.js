let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];
let stageOneEl = document.getElementById("stage");
console.log(stageOneEl);
let fightButton = document.getElementById("fightButton");
console.log(fightButton);

/*
function ChoosePlayers() {
  let anyNumber = Math.floor(Math.random() * fighters.length);
  let anyNumber2 = Math.floor(Math.random() * fighters.length);

  stageOneEl.textContent = fighters[anyNumber] + " Vs " + fighters[anyNumber2];
}

// fightButton.addEventListener("click", function () {
//   let randomIndexOne = Math.floor(Math.random()) * fighters.length;
//   let randomIndexTwo = Math.floor(Math.random()) * fighters.length;
//   stageOneEl.textContent =
//     fighters[randomIndexOne] + " Vs " + fighters[randomIndexTwo];
// });

*/

fightButton.addEventListener("click", function () {
  let anyNumber = Math.floor(Math.random() * fighters.length);
  let anyNumber2 = Math.floor(Math.random() * fighters.length);

  stageOneEl.textContent = fighters[anyNumber] + " Vs " + fighters[anyNumber2];
});
