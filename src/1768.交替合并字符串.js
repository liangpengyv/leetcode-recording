/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  const result = []
  const maxLength = Math.max(word1.length, word2.length)
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) result.push(word1[i])
    if (i < word2.length) result.push(word2[i])
  }
  return result.join('')
}
// @lc code=end

console.log(mergeAlternately('abc', 'pqr')) // 'apbqcr'
