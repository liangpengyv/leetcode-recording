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
  const sArr = s.split('')
  const tArr = t.split('')

  let sIndex = 0
  let tIndex = 0

  while (sIndex < sArr.length && tIndex < tArr.length) {
    if (sArr[sIndex] === tArr[tIndex]) {
      sIndex++
    }
    tIndex++
  }

  return sIndex === sArr.length
}
// @lc code=end

const s = 'axc'
const t = 'ahbgdc'
console.log(isSubsequence(s, t))
