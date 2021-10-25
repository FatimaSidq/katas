function findTaxi(grid) {
  for (let row of grid) {
    if (row.includes(1)) {
      return [grid.indexOf(row), row.indexOf(1)];
    }
  }
}

function blocksAway(directions) {
  let facing = undefined;
  let grid = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
  ];

  for (let direction of directions) {
    let position = findTaxi(grid);
    if (["right", "left"].includes(direction)) {
      facing = direction;
    } else if (typeof direction == "number") {
      if (facing == "right") {
        grid[position[0]][position[1]] = 0;
        grid[position[0]][position[1] + direction] = 1;
      } else if (facing == "left") {
        grid[position[0]][position[1]] = 0;
        grid[position[0] - direction][position[1]] = 1;
      }
    }
  }
  let result = { east: 0, north: 0 };
  let reversedgrid = [];
  for (let i = grid.length - 1; i > -1; i--) {
    let row = grid[i];
    reversedgrid.push(row);
  }
  for (let row of grid) {
    if (row.includes(1)) {
      result.north = reversedgrid.indexOf(row);
      result.east = row.indexOf(1);
    }
  }
  return result;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
