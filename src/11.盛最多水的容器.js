/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let leftIndex = 0
  let rightIndex = height.length - 1
  let maxArea = 0

  while (leftIndex < rightIndex) {
    maxArea = Math.max(maxArea, (rightIndex - leftIndex) * Math.min(height[leftIndex], height[rightIndex]))
    if (height[leftIndex] > height[rightIndex]) {
      rightIndex--
    } else {
      leftIndex++
    }
  }

  return maxArea
}
// @lc code=end
