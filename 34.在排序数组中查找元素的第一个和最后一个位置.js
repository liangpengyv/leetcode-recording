/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  let start = -1
  let end = -1

  if (nums[0] > target || nums[nums.length - 1] < target) {
    return [start, end]
  }

  let startPoint = 0
  let curPoint = Math.floor(nums.length / 2)
  while (nums[curPoint] < target) {
    startPoint = curPoint
    curPoint = Math.floor((nums.length + curPoint) / 2)
  }

  for (let i = startPoint; i < nums.length; i++) {
    if (nums[i] === target) {
      start = i
      if (i + 1 === nums.length) {
        end = i
        return [start, end]
      } else {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] !== target) {
            end = j - 1
            return [start, end]
          } else if (j + 1 === nums.length) {
            return [start, j]
          }
        }
      }
    }
  }
  return [start, end]
}
// @lc code=end

const nums = [2]
const target = 3
console.log(searchRange(nums, target))
