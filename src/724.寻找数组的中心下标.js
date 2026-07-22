/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  if (nums.length === 1) return 0

  let left = 0
  let right = 0
  nums.forEach(num => (right += num))
  right -= nums[0]

  console.log(left, right)

  if (left === right) return 0

  let index = 0
  while (index < nums.length) {
    left += nums[index]
    index++
    right -= nums[index]

    console.log(left, right, index)

    if (left === right) return index
  }

  return -1
}
// @lc code=end

const nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums))
