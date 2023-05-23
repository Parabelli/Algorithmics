const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main(num) {
  if (num == 1) {
    return "Lundi";
  } else if (num == 2) {
    return "Mardi";
  } else if (num == 3) {
    return "Mercredi";
  } else if (num == 4) {
    return "Jeudi";
  } else if (num == 5) {
    return "Vendredi";
  } else if (num == 6) {
    return "Samedi";
  } else if (num == 7) {
    return "Dimanche";
  } else {
    return "Error";
  }
}
rl.question("Number of the day (1 to 7): ", (num) => {
  console.log(Main(num));
  rl.close();
});
