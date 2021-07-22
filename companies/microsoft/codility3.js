function compare(index, bulbs) {
  if (index === 0) return bulbs[0] === 1;
  return bulbs[index] === 1 && compare(index - 1, bulbs);
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let activeBulbs = new Array(A.length).fill(0);
  let moments = 0;

  for (let i = 0; i < A.length; i++) {
    let index = A[i] - 1;
    activeBulbs[index] = 1;

    if (compare(index, activeBulbs)) moments += 1;
  }

  return moments;
}

console.log(solution([2, 1, 3, 5, 4])); //3
console.log(solution([2, 3, 4, 1, 5])); //2

console.log(solution([1, 3, 4, 2, 5])); //3
