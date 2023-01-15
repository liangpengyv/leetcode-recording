/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      for (let k = j + 1; k < nums.length - 1; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue
        }
        for (let l = nums.length - 1; l > k; l--) {
          if (l < nums.length - 1 && nums[l] === nums[l + 1]) {
            continue
          }

          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            result.push([nums[i], nums[j], nums[k], nums[l]])
            break
          }
        }
      }
    }
  }

  return result
}
// @lc code=end
