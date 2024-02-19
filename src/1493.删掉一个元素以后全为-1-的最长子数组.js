/*
 * @lc app=leetcode.cn id=1493 lang=javascript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
  let max = 0
  let left = 0
  let right = 0
  const zeroIndex = []
  let zeroSum = 0
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroIndex.push(right)
      zeroSum++
      if (zeroSum > 1) {
        left = zeroIndex.shift() + 1
        zeroSum--
      }
    }
    max = Math.max(max, right - left + 1 - 1)
    right++
  }
  return max
}
// @lc code=end
