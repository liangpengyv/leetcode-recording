/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  if (n === 0) {
    return false
  }
  if (n === 1) {
    return true
  }
  if (n % 2 !== 0) {
    return false
  }
  if (n % 2 === 0) {
    return isPowerOfTwo(n / 2)
  }
}
// @lc code=end
