const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var arr = [];
var count = 0;

rl.question("number of dices : ", (num) => {
  rl.question("face to track : ", (face) => {
    for (let i = 0; i <= num; i++) {
      var dice = Math.floor(Math.random() * 6 + 1);
      arr.push(dice);
      if (arr[i] == face) {
        count++;
      }
    }
    console.log(`${count} face on ${num} throw`);
    rl.close();
  });
});
