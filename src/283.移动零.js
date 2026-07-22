/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let front = 0
  let back = 0

  while (front < nums.length) {
    if (nums[front] !== 0) {
      const temp = nums[back]
      nums[back] = nums[front]
      nums[front] = temp
      back++
    }
    front++
  }
}
// @lc code=end

const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)
