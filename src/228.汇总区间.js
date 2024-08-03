/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  if (!nums.length) return []

  const ans = []
  let p = 0
  let len = 0

  const addGroup = () => {
    if (len === 1) {
      ans.push(`${nums[p]}`)
    } else {
      ans.push(`${nums[p]}->${nums[p + len - 1]}`)
    }
  }

  while (p + len < nums.length) {
    len++
    if (nums[p + len] - nums[p + len - 1] > 1) {
      addGroup()
      p = p + len
      len = 0
    }
  }

  addGroup()

  return ans
}
// @lc code=end
