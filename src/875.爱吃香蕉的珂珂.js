/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
  let low = 1
  let high = 0
  for (const pile of piles) {
    high = Math.max(high, pile)
  }

  const getTime = (speed) => {
    let time = 0
    for (const pile of piles) {
      const curTime = Math.floor((pile - 1) / speed) + 1
      time += curTime
    }
    return time
  }

  while (low < high) {
    const middle = low + Math.floor((high - low) / 2)
    if (getTime(middle) <= h) high = middle
    else low = middle + 1
  }
  return low
}
// @lc code=end
