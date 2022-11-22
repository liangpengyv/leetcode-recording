/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const originlist = path.split('/')
  const resultList = []

  originlist.forEach(item => {
    if (item === '' || item === '.') {
      ;
    } else if (item === '..') {
      if (resultList.length > 0) {
        resultList.pop()
      }
    } else {
      resultList.push(item)
    }
  })

  return '/' + resultList.join('/')
}
// @lc code=end
