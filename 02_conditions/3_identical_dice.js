var d1 = Math.floor(Math.random() * 6 + 1);
var d2 = Math.floor(Math.random() * 6 + 1);
var d3 = Math.floor(Math.random() * 6 + 1);

if (d1 == d2 && d1 == d3) {
  console.log(`Three identical faces : ${d1}`);
} else if (d1 == d2) {
  console.log(`Two identical faces : ${d1}`);
} else if (d2 == d3) {
  console.log(`Two identical faces : ${d2}`);
} else if (d1 == d3) {
  console.log(`Two identical faces : ${d1}`);
} else {
  console.log(`Too bad!`);
}
