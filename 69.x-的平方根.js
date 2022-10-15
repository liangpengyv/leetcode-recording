/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let n = 0
  while (n * n <= x) {
    n++
  }
  return n - 1
}
// @lc code=end

const result = mySqrt(9)
console.log(result)
