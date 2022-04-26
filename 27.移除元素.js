/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let count = 0
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - 1 - count]
      count++
      i--
    }
  }
  return nums.length - count
}
// @lc code=end
