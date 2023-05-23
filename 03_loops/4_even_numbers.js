const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("number : ", (num3) => {
  console.log(`even from 1 to ${num3} : `);
  if (num3 >= 1) {
    for (let i = 1; i <= num3; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  } else if (num3 < 1) {
    for (let i = 1; i >= num3; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  rl.close();
});
