/*
 * @lc app=leetcode.cn id=1657 lang=javascript
 *
 * [1657] 确定两个字符串是否接近
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
  const wordList1 = word1.split('')
  const wordList2 = word2.split('')
  const wordMap1 = new Map()
  const wordMap2 = new Map()
  for (const str of wordList1) {
    if (wordMap1.has(str)) {
      wordMap1.set(str, wordMap1.get(str) + 1)
    } else {
      wordMap1.set(str, 1)
    }
  }
  for (const str of wordList2) {
    if (wordMap2.has(str)) {
      wordMap2.set(str, wordMap2.get(str) + 1)
    } else {
      wordMap2.set(str, 1)
    }
  }
  return Array.from(wordMap1.values()).sort().toString() === Array.from(wordMap2.values()).sort().toString() && Array.from(wordMap1.keys()).sort().toString() === Array.from(wordMap2.keys()).sort().toString()
}
// @lc code=end

const word1 = 'abc'
const word2 = 'bca'
console.log(closeStrings(word1, word2))
