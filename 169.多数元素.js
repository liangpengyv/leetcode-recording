/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const hash = new Map()
  nums.forEach(item => {
    const currentCount = hash.get(item)
    if (currentCount) {
      hash.set(item, currentCount + 1)
    } else {
      hash.set(item, 1)
    }
  })
  const hashList = Array.from(hash)
  hashList.sort((a, b) => b[1] - a[1])
  return hashList[0][0]
}
// @lc code=end
