function frankenSplice(arr1, arr2, n) {
  let arr2Copy = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    array2Copy.splice(n, 0, arr1[i]);
    n++;
  }
  return array2Copy;
}