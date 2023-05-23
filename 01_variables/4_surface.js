const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Radius : ", (num1) => {
  var num2 = num1 * num1;
  var surface = Math.PI * num2;
  console.log(surface);
  rl.close();
});
