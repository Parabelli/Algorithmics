const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Hour : ", (h) => {
  rl.question("Minute : ", (m) => {
    rl.question("Second : ", (s) => {
      var sectot = +h * 60 * 60 + +m * 60 + +s;
      console.log(`${sectot}seconds since midnight`);
      rl.close();
    });
  });
});
