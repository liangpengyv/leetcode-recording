/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  let count = 0

  // [0]
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return n <= 1
  }

  // [0, 0, ...]
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    flowerbed[0] = 1
    count++
  }

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1
      count++
      i++
    }
  }

  // [..., 0, 0]
  if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
    count++
  }

  return count >= n
}
// @lc code=end
