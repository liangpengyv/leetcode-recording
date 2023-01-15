/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let cur = m + n - 1

  while (p1 >= 0 || p2 >= 0) {
    if (p1 < 0) {
      nums1[cur] = nums2[p2]
      p2--
      cur--
      continue
    }
    if (p2 < 0) {
      nums1[cur] = nums1[p1]
      p1--
      cur--
      continue
    }

    if (nums1[p1] > nums2[p2]) {
      nums1[cur] = nums1[p1]
      p1--
      cur--
    } else if (nums1[p1] < nums2[p2]) {
      nums1[cur] = nums2[p2]
      p2--
      cur--
    } else {
      nums1[cur] = nums2[p2]
      p2--
      cur--
      nums1[cur] = nums1[p1]
      p1--
      cur--
    }
  }
}
// @lc code=end
