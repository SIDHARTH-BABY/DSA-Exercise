var equalPairs = function(grid) {
    let n = grid.length;
    let rowMap = new Map();
    let count = 0;
  
    // Store row occurrences
    for (let row of grid) {
      let key = row.toString();
      rowMap.set(key, (rowMap.get(key) || 0) + 1);
    }
  
    // Compare columns against stored row data
    for (let col = 0; col < n; col++) {
      let colArr = [];
      for (let row = 0; row < n; row++) {
        colArr.push(grid[row][col]);
      }
      let key = colArr.toString();
      if (rowMap.has(key)) {
        count += rowMap.get(key);
      }
    }
  
    return count;
  };
  
const grid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];
console.log(commonVal(grid));
