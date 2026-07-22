/*
 * @lc app=leetcode.cn id=2390 lang=javascript
 *
 * [2390] 从字符串中移除星号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function (s) {
  const stack = []
  const arr = s.split('')

  for (const char of arr) {
    if (char !== '*') {
      stack.push(char)
    } else {
      stack.pop()
    }
  }

  return stack.join('')
}
// @lc code=end

const s = 'leet**cod*e'
console.log(removeStars(s))
