/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let left = 1
  let right = n
  while (left < right) {
    const middle = left + Math.floor((right - left) / 2)
    if (guess(middle) <= 0) right = middle
    if (guess(middle) > 0) left = middle + 1
  }
  return left
}
// @lc code=end
