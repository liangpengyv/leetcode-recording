/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let preDiff = Infinity
  let result = 0
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
        const sum = nums[i] + nums[j] + nums[k]
        const curDiff = sum - target
        if (Math.abs(curDiff) < Math.abs(preDiff)) {
          preDiff = curDiff
          result = sum
        }
      }
    }
  }
  return result
}
// @lc code=end
