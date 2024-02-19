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
  let max = 0
  let cur = 0
  for (let i = 0; i < gain.length; i++) {
    cur += gain[i]
    max = Math.max(max, cur)
  }
  return max
}
// @lc code=end
