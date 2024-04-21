/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const list = []
  const ans = []

  const dfs = (num) => {
    if (list.length === k) ans.push(Array.from(list))
    for (let i = num; i <= n; i++) {
      list.push(i)
      dfs(i + 1)
      list.pop()
    }
  }

  dfs(1)
  return ans
}
// @lc code=end
