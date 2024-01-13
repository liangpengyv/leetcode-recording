/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let i = 0
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) i++
    if (i === s.length) return true
  }
  return i === s.length
}
// @lc code=end

const s = 'axc'
const t = 'ahbgdc'
console.log(isSubsequence(s, t))
