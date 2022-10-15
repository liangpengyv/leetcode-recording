/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const twoA = `0b${a}`
  const twoB = `0b${b}`
  const sum = BigInt(twoA) + BigInt(twoB)
  return sum.toString(2)
}
// @lc code=end
