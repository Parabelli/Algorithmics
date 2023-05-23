const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("1 to n : ", (num1) => {
  rl.question("-n to n : ", (num2) => {
    rl.question("1 odd to n : ", (num3) => {
      console.log(`1 to n (${num1}) : `);
      if (num1 >= 1) {
        for (let i = 0; i < num1; i++) {
          console.log(i + 1);
        }
      } else if (num1 < 1) {
        for (let i = 0; i > num1; i--) {
          console.log(i - 1);
        }
      }
      console.log(`-n to n (${num2}) : `);
      if (-num2 >= 0) {
        for (let i = -num2; i >= num2; i--) {
          console.log(i);
        }
      } else if (-num2 < 0) {
        for (let i = -num2; i <= num2; i++) {
          console.log(i);
        }
      }
      for (let i = 0; i < num2; i++) {
        console.log(i);
      }
      console.log(`odd from 1 to ${num3} : `);
      if (num3 >= 1) {
        for (let i = 0; i <= num3; i++) {
          if (i % 2 === 1) {
            console.log(i);
          }
        }
      } else if (num3 < 1) {
        for (let i = 0; i >= num3; i--) {
          if (i % 2 === -1) {
            console.log(i);
          }
        }
      }
      rl.close();
    });
  });
});
