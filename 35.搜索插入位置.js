/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (target === nums[middle]) {
      return middle
    } else if (target > nums[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return left
}
// @lc code=end

const nums = [1, 3, 5, 6]
const target = 7
console.log(searchInsert(nums, target))
