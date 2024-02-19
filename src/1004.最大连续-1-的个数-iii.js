/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let max = 0
  let left = 0
  let right = 0
  const zeroIndex = []
  let zeroSum = 0
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroIndex.push(right)
      zeroSum++
      if (zeroSum > k) {
        left = zeroIndex.shift() + 1
        zeroSum--
      }
    }
    max = Math.max(max, right - left + 1)
    right++
  }
  return max
}
// @lc code=end

const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
const k = 2
console.log(longestOnes(nums, k))
