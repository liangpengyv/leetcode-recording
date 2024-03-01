/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
  let max = -Infinity
  let maxIndex = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }
  return maxIndex
}
// @lc code=end
