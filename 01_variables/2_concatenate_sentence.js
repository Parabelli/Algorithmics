const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("first phrase : ", (phrase1) => {
  rl.question("second phrase : ", (phrase2) => {
    var conc = phrase1 + " " + phrase2;
    console.log(conc);
    rl.close();
  });
});
