const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main(h, m, s) {
  var sectot = +h * 60 * 60 + +m * 60 + +s;
  return sectot;
}
rl.question("Hour : ", (h) => {
  rl.question("Minute : ", (m) => {
    rl.question("Second : ", (s) => {
      console.log(`${Main(h, m, s)}seconds since midnight`);
      rl.close();
    });
  });
});
