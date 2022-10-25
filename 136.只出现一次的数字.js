/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let result = 0
  nums.forEach(item => {
    result = result ^ item
  })
  return result
}
// @lc code=end

const nums = [1, 2, 3, 1, 2, 3, 4]
console.log(singleNumber(nums))
