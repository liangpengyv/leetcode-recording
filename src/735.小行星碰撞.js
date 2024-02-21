/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 小行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function (asteroids) {
  const stack = [asteroids[0]]
  for (let i = 1; i < asteroids.length; i++) {
    if ((asteroids[i] < 0 && stack[stack.length - 1] > 0)) {
      if (Math.abs(asteroids[i]) === Math.abs(stack[stack.length - 1])) {
        stack.pop()
      } else if (Math.abs(asteroids[i]) > Math.abs(stack[stack.length - 1])) {
        stack.pop()
        i--
      }
    } else {
      stack.push(asteroids[i])
    }
  }
  return stack
}
// @lc code=end

const asteroids = [-2, -1, 1, 2]
console.log(asteroidCollision(asteroids))
