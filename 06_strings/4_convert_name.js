const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Main(s) {
  let split = s.split(",");
  let name = split[1];
  let surname = split[0];
  let all = name + ` ` + surname;
  return all;
}

rl.question("Surname, Name : ", (s) => {
  console.log(Main(s));
  rl.close();
});
