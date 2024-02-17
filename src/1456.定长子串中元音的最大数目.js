/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
  const sList = s.split('')
  let sum = 0

  const isVowel = (str) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(str)) return 1
    else return 0
  }

  for (let i = 0; i < k; i++) {
    sum += isVowel(sList[i])
  }

  let max = sum
  for (let i = k; i < sList.length; i++) {
    sum = sum - isVowel(sList[i - k]) + isVowel(sList[i])
    max = Math.max(max, sum)
  }

  return max
}
// @lc code=end
