let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
const runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly) {
  console.log(
    "Please your race number is: " +
      raceNumber +
      " " +
      "and your race time is 9:30 pm"
  );
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(
    "Please your race number is: " +
      raceNumber +
      " " +
      "and your race time is 11:00 pm"
  );
} else if (runnerAge < 18) {
  console.log(
    "Please your race number is: " +
      raceNumber +
      " " +
      "and your race time is 12:30 pm"
  );
} else {
  console.log("Please see the registeration desk thank you");
}
