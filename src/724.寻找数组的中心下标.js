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
  const leftSum = [0]
  const rightSum = [0]
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum.push(leftSum[i] + nums[i])
    rightSum.unshift(rightSum[rightSum.length - 1 - i] + nums[nums.length - 1 - i])
  }
  for (let i = 0; i < nums.length; i++) {
    if (leftSum[i] === rightSum[i]) {
      return i
    }
  }
  return -1
}
// @lc code=end

const nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums))
