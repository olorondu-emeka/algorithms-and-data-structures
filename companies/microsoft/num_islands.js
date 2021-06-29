function numberOfIslands(grid) {
  let visited = {};
  let indexes = {};
  let islands = 0,
    island = grid[0][0] === '1' ? 1 : 0;

  let rows = grid.length,
    columns = grid[0].length;

  // get islands & its neighbours
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let key = `${i}${j}`;
      if (!indexes[key]) indexes[key] = [];

      if (j + 1 < columns) indexes[key].push(`${i}${j + 1}`); // right
      if (j - 1 >= 0) indexes[key].push(`${i}${j - 1}`); // left
      if (i + 1 < rows) indexes[key].push(`${i + 1}${j}`); // down
      if (i - 1 >= 0) indexes[key].push(`${i - 1}${j}`); // up
    }
  }

  // perform DFS on vertices
  function dfs(index, inputGrid) {
    if (!index) return null;
    visited[index] = true;

    indexes[index].forEach((neighbour) => {
      let row = neighbour[0],
        column = neighbour[1];

      if (!visited[neighbour]) {
        if (inputGrid[row][column] === '1') {
          island += 1;
        }
        dfs(neighbour, inputGrid);
        if (island > 0) {
          // islands += 1;
          // island = 0;
        }
      }
      // islands += 1;
    });
  } // end dfs

  dfs('00', grid);
  // console.log(visited);
  return island;
}

const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
];
const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];

// console.log(numberOfIslands(grid1)); //1
console.log(numberOfIslands(grid2)); //3
