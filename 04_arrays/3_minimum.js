var arr = [2, 2, 1, 4];
var min = 10;
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);
