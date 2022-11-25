/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  if (target >= nums[0]) {
    for (let i = 0; i < nums.length; i++) {
      if (target === nums[i]) {
        return i
      } else if (nums[i] < nums[i - 1]) {
        break
      }
    }
  } else {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (target === nums[i]) {
        return i
      } else if (nums[i] > nums[i + 1]) {
        break
      }
    }
  }
  return -1
}
// @lc code=end
