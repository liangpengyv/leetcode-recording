/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
  if (nums.length < 3) {
    return false
  }

  const leftMin = new Array(nums.length).fill([nums[0]])
  const rightMax = new Array(nums.length).fill([nums[nums.length - 1]])

  for (let i = 1; i < nums.length; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i])
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i])
  }

  for (let i = 1; i < nums.length - 1; i++) {
    if (leftMin[i] < nums[i] && nums[i] < rightMax[i]) {
      return true
    }
  }
  return false
}
// @lc code=end
