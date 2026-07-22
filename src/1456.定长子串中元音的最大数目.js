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
  const set = ['a', 'e', 'i', 'o', 'u']
  const sArr = s.split('')
  const tagArr = sArr.map(char => set.includes(char) ? 1 : 0)

  let max = 0
  tagArr.slice(0, k).forEach(tag => (max += tag))

  let left = 0
  let right = k
  let current = max
  while (right < tagArr.length) {
    current = current - tagArr[left] + tagArr[right]
    max = Math.max(max, current)
    left++
    right++
  }

  return max
}
// @lc code=end
