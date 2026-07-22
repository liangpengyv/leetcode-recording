/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  let current = 0
  let max = 0
  gain.forEach(h => {
    current = current += h
    max = Math.max(max, current)
  })
  return max
}
// @lc code=end
