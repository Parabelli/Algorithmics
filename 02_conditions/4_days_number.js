const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Number of the day (1 to 7): ", (num) => {
  if (num == 1) {
    console.log("Lundi");
  } else if (num == 2) {
    console.log("Mardi");
  } else if (num == 3) {
    console.log("Mercredi");
  } else if (num == 4) {
    console.log("Jeudi");
  } else if (num == 5) {
    console.log("Vendredi");
  } else if (num == 6) {
    console.log("Samedi");
  } else if (num == 7) {
    console.log("Dimanche");
  } else {
    console.log("Error");
  }
  rl.close();
});
