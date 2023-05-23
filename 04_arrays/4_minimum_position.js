var arr = [2, 3, 1, 4];
var min = 10;
var minpos = 0;
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
    minpos = arr.indexOf(arr[i]);
  }
}
console.log(minpos);
