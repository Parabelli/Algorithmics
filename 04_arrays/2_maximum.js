var arr = [2, 2, 1, 4];
var max = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
