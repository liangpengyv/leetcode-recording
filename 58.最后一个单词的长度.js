/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const list = s.split(' ')
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i].length > 0) {
      return list[i].length
    }
  }
}
// @lc code=end
