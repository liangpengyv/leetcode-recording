/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  s = s.trim()
  if (s.length === 0) {
    return 0
  }

  const result = parseInt(s)
  if (Number.isNaN(result)) {
    return 0
  }

  if (result < 0) {
    if (result < -2147483648) {
      return -2147483648
    } else {
      return result
    }
  } else {
    if (result > 2147483647) {
      return 2147483647
    } else {
      return result
    }
  }
}
// @lc code=end
