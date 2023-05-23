const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main(num1, num2) {
  var add = +num1 + +num1 * (+num2 * 0.01);
  return add;
}
rl.question("Price($) : ", (num1) => {
  rl.question("VAT(%) : ", (num2) => {
    console.log(`The price with VAT is ${Main(num1, num2)}`);
    rl.close();
  });
});
