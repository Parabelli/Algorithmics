const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main(phrase1, phrase2) {
  let conc = phrase1 + " " + phrase2;
  return conc;
}

rl.question("first phrase : ", (phrase1) => {
  rl.question("second phrase : ", (phrase2) => {
    console.log(Main(phrase1, phrase2));
    rl.close();
  });
});
