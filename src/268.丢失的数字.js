/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const list = new Array(nums.length + 1)
  nums.forEach(item => {
    list[item] = true
  })
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== true) {
      return i
    }
  }
}
// @lc code=end
