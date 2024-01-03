/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const left = []
  const right = []
  const answer = []

  left[0] = 1
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }

  right[nums.length - 1] = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i]
  }

  return answer
}
// @lc code=end

console.log(productExceptSelf([-1, 1, 0, -3, 3]))
