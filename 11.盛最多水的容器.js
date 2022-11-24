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
  let maxArea = 0
  let p1 = 0
  let p2 = height.length - 1

  while (p1 !== p2) {
    if (height[p1] > height[p2]) {
      maxArea = Math.max(maxArea, (p2 - p1) * height[p2])
      p2--
    } else {
      maxArea = Math.max(maxArea, (p2 - p1) * height[p1])
      p1++
    }
  }
  return maxArea
}
// @lc code=end
