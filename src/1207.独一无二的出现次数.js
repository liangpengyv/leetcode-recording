/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const map = new Map()
  for (const x of arr) {
    map.set(x, (map.get(x) || 0) + 1)
  }

  const set = new Set(map.values())
  return set.size === map.size
}
// @lc code=end

const arr = [1, 2, 2, 1, 1, 3]
console.log(uniqueOccurrences(arr))
