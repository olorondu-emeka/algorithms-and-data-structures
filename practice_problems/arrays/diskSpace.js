function segment(x, space) {
  // Write your code here
  let minArray = [];
  let i = 0,
    j = x - 1;
  while (i <= space.length - x) {
    let newArr = space.slice(i, i + x);
    minArray.push(Math.min(...newArr));
    i++;
  }

  console.log(minArray);

  return Math.max(...minArray);
}

segment(2, [8, 2, 4, 6]);
