/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const chars = s.split('')
  let left = 0
  let right = chars.length - 1

  while (left < right) {
    while (!vowels.has(chars[left]) && left < right) {
      left++
    }
    while (!vowels.has(chars[right]) && left < right) {
      right--
    }
    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]]
      left++
      right--
    }
  }

  return chars.join('')
}
// @lc code=end
