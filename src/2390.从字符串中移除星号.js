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
  const sList = s.split('')
  for (let i = 0; i < sList.length; i++) {
    if (sList[i] === '*') {
      stack.pop()
    } else {
      stack.push(sList[i])
    }
  }
  return stack.join('')
}
// @lc code=end

const s = 'leet**cod*e'
console.log(removeStars(s))
