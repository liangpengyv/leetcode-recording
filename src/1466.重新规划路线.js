/*
 * @lc app=leetcode.cn id=1466 lang=javascript
 *
 * [1466] 重新规划路线
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function (n, connections) {
  const e = Array.from({ length: n }, () => [])
  for (const edge of connections) {
    e[edge[0]].push([edge[1], 1])
    e[edge[1]].push([edge[0], 0])
  }

  let ans = 0
  const dfs = (x, parent) => {
    for (const [it, direction] of e[x]) {
      if (it !== parent) {
        ans += direction
        dfs(it, x)
      }
    }
  }
  dfs(0, -1)
  return ans
}
// @lc code=end
