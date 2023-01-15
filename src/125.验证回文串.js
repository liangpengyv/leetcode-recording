/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const list = []
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z0-9]/.test(s.charAt(i))) {
      if (/[A-Z]/.test(s.charAt(i))) {
        list.push(s.charAt(i).toLowerCase())
      } else {
        list.push(s.charAt(i))
      }
    }
  }

  let p1 = 0
  let p2 = list.length - 1
  while (p1 < p2) {
    if (list[p1] !== list[p2]) {
      return false
    } else {
      p1++
      p2--
    }
  }
  return true
}
// @lc code=end
