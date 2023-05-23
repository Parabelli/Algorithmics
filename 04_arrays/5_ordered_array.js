/* Case 1 */
var arr1 = [1, 2, 3, 4];
var max1 = 0;

for (let i = 0; i < arr1.length; i++) {
  if (max1 < arr1[i]) {
    max1 = arr1[i];
  }
}
if (max1 == arr1[arr1.length - 1]) {
  console.log("ordered");
} else {
  console.log("unordered");
}

/* Case 2 */
var arr2 = [2, 3, 1, 4];
var max2 = 0;

for (let i = 0; i < arr2.length; i++) {
  if (max2 < arr2[i]) {
    max2 = arr2[i];
  }
}
if (max2 == arr2[arr2.length]) {
  console.log("ordered");
} else {
  console.log("unordered");
}
