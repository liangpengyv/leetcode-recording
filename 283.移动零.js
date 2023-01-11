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
  let pre = 0
  let cur = 0
  let step = nums.length
  while (step--) {
    if (nums[cur] === 0) {
      cur++
    } else {
      const temp = nums[pre]
      nums[pre] = nums[cur]
      nums[cur] = temp
      pre++
      cur++
    }
  }
}
// @lc code=end

const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)
