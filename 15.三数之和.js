/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      for (let k = nums.length - 1; k > j; k--) {
        if (k < nums.length - 1 && nums[k] === nums[k + 1]) {
          continue
        }
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]])
          break
        }
      }
    }
  }
  return result
}
// @lc code=end
