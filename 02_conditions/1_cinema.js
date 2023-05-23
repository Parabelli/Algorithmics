const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Reduced Tarrif? (yes/no) : ", (tar) => {
  if (tar == "yes") {
    console.log(`8 euro`);
  } else {
    console.log(`10 euro`);
  }

  rl.close();
});
