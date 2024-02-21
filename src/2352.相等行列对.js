/*
 * @lc app=leetcode.cn id=2352 lang=javascript
 *
 * [2352] 相等行列对
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function (grid) {
  const n = grid.length
  const rowStrMap = new Map()
  const colStrMap = new Map()
  for (let i = 0; i < n; i++) {
    const row = []
    const col = []
    for (let j = 0; j < n; j++) {
      row.push(grid[i][j])
      col.push(grid[j][i])
    }
    const rowStr = row.join()
    const colStr = col.join()
    rowStrMap.set(rowStr, rowStrMap.has(rowStr) ? rowStrMap.get(rowStr) + 1 : 1)
    colStrMap.set(colStr, colStrMap.has(colStr) ? colStrMap.get(colStr) + 1 : 1)
  }

  let result = 0
  for (const [key, value] of rowStrMap) {
    if (colStrMap.has(key)) {
      result += value * colStrMap.get(key)
    }
  }

  return result
}
// @lc code=end

const grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]
console.log(equalPairs(grid))
