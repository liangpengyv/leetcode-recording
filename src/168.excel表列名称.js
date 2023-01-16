/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  const strList = []
  while (columnNumber > 0) {
    if (columnNumber % 26 === 0) {
      strList.push(String.fromCharCode(26 + 64))
      columnNumber = columnNumber / 26
      columnNumber = columnNumber - 1
    } else {
      strList.push(String.fromCharCode(columnNumber % 26 + 64))
      columnNumber = (columnNumber - columnNumber % 26) / 26
    }
  }
  return strList.reverse().join('')
}
// @lc code=end
