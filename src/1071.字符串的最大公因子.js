/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''

  if (str1 === str2) return str1

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const gcdNum = gcd(str1.length, str2.length)
  return str1.slice(0, gcdNum)
}
// @lc code=end
