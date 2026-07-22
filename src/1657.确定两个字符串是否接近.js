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
  const map1 = new Map()
  const map2 = new Map()
  for (const w of word1) {
    map1.set(w, (map1.get(w) || 0) + 1)
  }
  for (const w of word2) {
    map2.set(w, (map2.get(w) || 0) + 1)
  }

  const keyMarry = Array.from(map1.keys()).sort().join('') === Array.from(map2.keys()).sort().join('')
  const valueMarry = Array.from(map1.values()).sort().join('') === Array.from(map2.values()).sort().join('')
  return keyMarry && valueMarry
}
// @lc code=end

const word1 = 'abbzzca'
const word2 = 'babzzcz'
console.log(closeStrings(word1, word2))
