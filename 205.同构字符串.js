/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const sList = s.split('')
  const tList = t.split('')
  const sHash = {}
  const tHash = {}
  for (let i = 0; i < sList.length; i++) {
    if (sHash[sList[i]] || tHash[tList[i]]) {
      if (sHash[sList[i]] && sHash[sList[i]] !== tList[i]) {
        return false
      }
      if (tHash[tList[i]] && tHash[tList[i]] !== sList[i]) {
        return false
      }
    } else {
      sHash[sList[i]] = tList[i]
      tHash[tList[i]] = sList[i]
    }
  }
  return true
}
// @lc code=end
