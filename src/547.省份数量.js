/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  const size = isConnected.length
  const visited = new Set()

  const dfs = (isConnected, i) => {
    for (let j = 0; j < size; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        visited.add(j)
        dfs(isConnected, j)
      }
    }
  }

  let count = 0
  for (let i = 0; i < size; i++) {
    if (!visited.has(i)) {
      dfs(isConnected, i)
      count++
    }
  }

  return count
}
// @lc code=end
