const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("first number : ", (num1) => {
  rl.question("second number : ", (num2) => {
    rl.question("third number : ", (num3) => {
      if (+num1 > +num2 && +num1 > +num3) {
        console.log(`${num1} is the maximum`);
      } else if (+num2 > +num1 && +num2 > +num3) {
        console.log(`${num2} is the maximum`);
      } else if (+num3 > +num1 && +num3 > +num2) {
        console.log(`${num3} is the maximum`);
      } else {
        console.log(`No/Multiple maximum`);
      }
      rl.close();
    });
  });
});
