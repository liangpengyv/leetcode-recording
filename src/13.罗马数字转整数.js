/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const singleRomanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const doubleRomanToInt = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  let result = 0
  const sList = s.split('')
  for (let i = 0; i < sList.length; i++) {
    if (Object.prototype.hasOwnProperty.call(doubleRomanToInt, (sList[i] + sList[i + 1]))) {
      result += doubleRomanToInt[sList[i] + sList[i + 1]]
      i++
    } else {
      result += singleRomanToInt[sList[i]]
    }
  }
  return result
}

// @lc code=end

const s = 'III'
console.log(romanToInt(s))
