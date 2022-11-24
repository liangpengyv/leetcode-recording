/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
  const subWindow = words[0].length
  const count = words.length
  const window = subWindow * count
  const result = []

  for (let i = 0; i <= s.length - window; i++) {
    const str = s.substring(i, i + window)
    const list = []
    for (let j = 0; j < count; j++) {
      list.push(str.substring(j * subWindow, (j + 1) * subWindow))
    }
    for (let k = 0; k < count; k++) {
      const index = list.indexOf(words[k])
      if (index < 0) {
        break
      } else {
        list.splice(index, 1)
      }
    }
    if (list.length === 0) {
      result.push(i)
    }
  }

  return result
}
// @lc code=end
