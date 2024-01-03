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

  const gcd = (l1, l2) => {
    let remainder = l1 % l2
    while (remainder !== 0) {
      l1 = l2
      l2 = remainder
      remainder = l1 % l2
    }
    return l2
  }

  return str1.substr(0, gcd(str1.length, str2.length))
}
// @lc code=end

const str1 = 'ABABAB'
const str2 = 'AB'
console.log(gcdOfStrings(str1, str2))
