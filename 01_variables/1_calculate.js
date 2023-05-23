const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("first number add : ", (num1) => {
  rl.question("second number add : ", (num2) => {
    var add = +num1 + +num2;
    console.log(`The sum of ${num1} and ${num2} is ${add}`);
    rl.question("first number div : ", (num3) => {
      rl.question("second number div : ", (num4) => {
        var div = num3 / num4;
        console.log(`The quotient of ${num3} divided by ${num4} is ${div}`);
        rl.question("first number rest : ", (num5) => {
          rl.question("second number rest : ", (num6) => {
            var rest = num5 % num6;
            console.log(`The rest of ${num5} divided by ${num6} is ${rest}`);
            rl.close();
          });
        });
      });
    });
  });
});
