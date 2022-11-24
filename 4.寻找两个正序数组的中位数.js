/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const nums1Length = nums1.length
  const nums2Length = nums2.length
  const totalLength = nums1Length + nums2Length
  const arr = []

  console.log(nums1Length, nums2Length, totalLength)

  let p1 = 0
  let p2 = 0
  for (let i = 0; i < Math.floor(totalLength / 2); i++) {
    if (p1 === nums1Length) {
      arr.push(nums2[p2])
      p2++
      continue
    }
    if (p2 === nums2Length) {
      arr.push(nums1[p1])
      p1++
      continue
    }
    if (nums1[p1] <= nums2[p2]) {
      arr.push(nums1[p1])
      p1++
    } else {
      arr.push(nums2[p2])
      p2++
    }
  }

  if (totalLength % 2 > 0) {
    if (p1 === nums1Length) {
      return nums2[p2]
    } else if (p2 === nums2Length) {
      return nums1[p1]
    } else {
      return Math.min(nums1[p1], nums2[p2])
    }
  } else {
    if (p1 === nums1Length) {
      return (nums2[p2] + arr.pop()) / 2
    } else if (p2 === nums2Length) {
      return (nums1[p1] + arr.pop()) / 2
    } else {
      return (Math.min(nums1[p1], nums2[p2]) + arr.pop()) / 2
    }
  }
}
// @lc code=end

const nums1 = [1, 2]
const nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))
