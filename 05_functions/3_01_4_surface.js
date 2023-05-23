const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main(num1) {
  var num2 = num1 * num1;
  var surface = Math.PI * num2;
  return surface;
}
rl.question("Radius : ", (num1) => {
  console.log(Main(num1));
  rl.close();
});
