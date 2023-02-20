/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  const getAddResult = (currentNum) => {
    if (currentNum < 10) {
      return currentNum
    }
    return getAddResult((currentNum - (currentNum % 10)) / 10) + (currentNum % 10)
  }

  let result = getAddResult(num)
  while (result >= 10) {
    result = getAddResult(result)
  }
  return result
}
// @lc code=end
