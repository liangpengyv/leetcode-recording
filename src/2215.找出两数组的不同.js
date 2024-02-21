/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  const result1 = new Set()
  const result2 = new Set()
  for (const num of nums1) {
    if (!set2.has(num)) {
      result1.add(num)
    }
  }
  for (const num of nums2) {
    if (!set1.has(num)) {
      result2.add(num)
    }
  }
  return [Array.from(result1), Array.from(result2)]
}
// @lc code=end

const nums1 = [1, 2, 3, 3]
const nums2 = [1, 1, 2, 2]
console.log(findDifference(nums1, nums2))
