/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function (s) {
  const list = s.split('').filter(item => item === '(' || item === ')')
  const stack = []
  let maxLen = 0
  for (const char of list) {
    if (char === '(') {
      stack.push(char)
      maxLen = Math.max(maxLen, stack.length)
    } else {
      stack.pop()
    }
  }
  return maxLen
}
// @lc code=end
