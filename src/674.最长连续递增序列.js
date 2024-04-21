/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  let maxLen = 1
  let curLen = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      curLen++
    } else {
      maxLen = Math.max(maxLen, curLen)
      curLen = 1
    }
  }
  return Math.max(maxLen, curLen)
}
// @lc code=end
