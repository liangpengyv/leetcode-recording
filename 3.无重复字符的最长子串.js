/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0
  }
  if (s.length === 1) {
    return 1
  }

  const sList = s.split('')
  const set = new Set()
  let result = 1
  for (let i = 0; i < sList.length - 1; i++) {
    set.add(sList[i])
    for (let j = i + 1; j < sList.length; j++) {
      const preSetSize = set.size
      set.add(sList[j])
      const curSetSize = set.size
      result = Math.max(result, curSetSize)
      if (curSetSize === preSetSize) {
        set.clear()
        break
      }
    }
  }
  return result
}
// @lc code=end
