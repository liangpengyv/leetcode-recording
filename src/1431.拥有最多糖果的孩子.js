/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
  let max = 0
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) max = candies[i]
  }

  const result = []
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max)
  }

  return result
}
// @lc code=end

console.log(kidsWithCandies([12, 1, 12], 10))
