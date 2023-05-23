const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Number of copies : ", (num) => {
  if (num > 0 && num <= 10) {
    tot = 0.12 * num;
    console.log(`${tot} euro`);
  }
  if (num > 10 && num <= 30) {
    tot = 0.12 * 10 + 0.11 * (num - 10);
    console.log(`${tot} euro`);
  }
  if (num > 30) {
    tot = 0.12 * 10 + 0.11 * 20 + 0.1 * (num - 30);
    console.log(`${tot} euro`);
  }
  rl.close();
});
