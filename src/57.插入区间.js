/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval]
  }

  if (intervals[intervals.length - 1][0] < newInterval[0]) {
    intervals.push(newInterval)
  } else {
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][0] >= newInterval[0]) {
        intervals.splice(i, 0, newInterval)
        break
      }
    }
  }

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
