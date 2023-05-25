const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main(s) {
  return s.trim();
}

rl.question("string : ", (s) => {
  console.log(Main(s));
  rl.close();
});
