const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var arr = [];
var tot = 0;

rl.question("number : ", (num3) => {
  for (let i = 0; i <= num3; i++) {
    if (num3 % i == 0 && num3 != i) {
      arr.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    tot += arr[i];
  }
  if (tot == num3) {
    console.log(`${num3} is a perfect number`);
  } else {
    console.log(`${num3} is not a perfect number`);
  }
  rl.close();
});
