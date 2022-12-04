/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  if (intervals.length === 1) {
    return intervals
  }

  intervals.sort((a, b) => a[0] - b[0])

  const result = []
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i + 1][0] > intervals[i][1]) {
      result.push(intervals[i])
      continue
    } else {
      intervals[i + 1][0] = Math.min(intervals[i + 1][0], intervals[i][0])
      intervals[i + 1][1] = Math.max(intervals[i + 1][1], intervals[i][1])
    }
  }
  result.push(intervals[intervals.length - 1])
  return result
}
// @lc code=end
