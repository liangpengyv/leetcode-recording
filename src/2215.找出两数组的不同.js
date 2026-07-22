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
  const ans1 = []
  const ans2 = []

  for (const set of set1) {
    if (!set2.has(set)) {
      ans1.push(set)
    }
  }
  for (const set of set2) {
    if (!set1.has(set)) {
      ans2.push(set)
    }
  }

  return [ans1, ans2]
}
// @lc code=end

const nums1 = [1, 2, 3, 3]
const nums2 = [1, 1, 2, 2]
console.log(findDifference(nums1, nums2))
