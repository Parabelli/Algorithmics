const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main(c) {
  return c.toLowerCase();
}

rl.question("character : ", (c) => {
  console.log(Main(c));
  rl.close();
});
