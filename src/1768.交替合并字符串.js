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
  let p1 = 0
  let p2 = 0
  while (p1 < word1.length || p2 < word2.length) {
    word1[p1] && result.push(word1[p1])
    word2[p2] && result.push(word2[p2])
    p1++
    p2++
  }
  return result.join('')
}
// @lc code=end

console.log(mergeAlternately('abc', 'pqr'))
