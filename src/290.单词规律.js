/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  const patternArr = pattern.split('')
  const sArr = s.split(' ')

  if (patternArr.length !== sArr.length) return false

  const map = new Map()
  const set = new Set()

  for (let i = 0; i < patternArr.length; i++) {
    if (map.has(patternArr[i])) {
      if (map.get(patternArr[i]) !== sArr[i]) return false
    } else {
      if (set.has(sArr[i])) return false
      map.set(patternArr[i], sArr[i])
      set.add(sArr[i])
    }
  }

  return true
}
// @lc code=end
