/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  if (nums.length === 1) {
    return true
  }

  const getListOfCanToTargetIndex = (targetIndex) => {
    for (let i = targetIndex - 1; i >= 0; i--) {
      if (targetIndex - i <= nums[i]) {
        if (i === 0) {
          return true
        } else {
          return getListOfCanToTargetIndex(i)
        }
      }
    }
    return false
  }

  return getListOfCanToTargetIndex(nums.length - 1)
}
// @lc code=end
