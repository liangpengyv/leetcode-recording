/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  let pre = n
  let cur = getNext(n)
  while (pre !== cur && cur !== 1) {
    pre = getNext(pre)
    cur = getNext(getNext(cur))
  }
  return cur === 1
}

const getNext = function (num) {
  let result = 0
  while (num) {
    result += (num % 10) * (num % 10)
    num = Math.floor(num / 10)
  }
  return result
}
// @lc code=end

const n = 19
console.log(isHappy(n))
