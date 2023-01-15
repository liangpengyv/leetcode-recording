/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s.trim().split(/ +/).reverse().join(' ')
}
// @lc code=end
