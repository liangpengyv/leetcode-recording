/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const list1 = version1.split('.')
  const list2 = version2.split('.')

  for (let i = 0; i < Math.min(list1.length, list2.length); i++) {
    if (parseInt(list1[i]) > parseInt(list2[i])) {
      return 1
    }
    if (parseInt(list1[i]) < parseInt(list2[i])) {
      return -1
    }
  }
  if (list1.length === list2.length) {
    return 0
  }

  if (list1.length > list2.length) {
    list1.splice(0, list2.length)
    const temp = parseInt(list1.join(''))
    if (temp === 0) {
      return 0
    } else {
      return temp > 0 ? 1 : -1
    }
  } else {
    list2.splice(0, list1.length)
    const temp = parseInt(list2.join(''))
    if (temp === 0) {
      return 0
    } else {
      return temp > 0 ? -1 : 1
    }
  }
}
// @lc code=end
