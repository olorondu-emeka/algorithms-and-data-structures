function maxInversions(arr) {
  // Write your code here
  if (arr.length < 3) return 0;
  if (arr.length === 3) {
    if (arr[0] > arr[1] && arr[1] > arr[2]) return 1;
    return 0;
  }

  // for arr.length > 3
  let finalAnswer = 0;
  let index1 = 0,
    index2 = 1,
    index3 = 2;

  while (index1 < arr.length - 2) {
    if (index3 === arr.length) {
      // recaliberate
      index2 += 1;
      index3 = index2 + 1;

      if (index3 === arr.length) {
        index1 += 1;
        index2 = index1 + 1;
        index3 = index2 + 1;
      }
    } else if (arr[index1] > arr[index2] && arr[index2] > arr[index3]) {
      finalAnswer += 1;
      index3 += 1;

      console.log('inversions', finalAnswer);
    } else if (arr[index1] > arr[index2] && arr[index2] < arr[index3]) {
      index2 += 1;
      index3 += 1;
    } else {
      index1 += 1;
      index2 = index1 + 1;
      index3 = index2 + 1;
    }
  }

  //   else if (arr[index1] < arr[index2]) {
  //     index1 += 1;
  //     index2 = index1 + 1;
  //     index3 = index2 + 1;
  return finalAnswer;
}

maxInversions([5, 3, 4, 2, 1]);
