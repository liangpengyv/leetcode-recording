/*
 * @lc app=leetcode.cn id=1926 lang=javascript
 *
 * [1926] 迷宫中离入口最近的出口
 */

// @lc code=start
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function (maze, entrance) {
  const m = maze.length
  const n = maze[0].length

  const isOut = (i, j) => (i !== entrance[0] || j !== entrance[1]) && (i === 0 || i === m - 1 || j === 0 || j === n - 1)

  const canGo = (i, j) => {
    if (i < 0 || i > m - 1 || j < 0 || j > n - 1) return false
    if (maze[i][j] === '.') {
      maze[i][j] = '+'
      return true
    } else {
      return false
    }
  }

  const q = [[entrance[0], entrance[1], 0]]
  while (q.length > 0) {
    let size = q.length
    while (size--) {
      const node = q.shift()
      if (isOut(node[0], node[1])) {
        return node[2]
      }

      const top = [node[0] - 1, node[1]]
      const bottom = [node[0] + 1, node[1]]
      const left = [node[0], node[1] - 1]
      const right = [node[0], node[1] + 1]

      if (canGo(...top)) q.push([...top, node[2] + 1])
      if (canGo(...bottom)) q.push([...bottom, node[2] + 1])
      if (canGo(...left)) q.push([...left, node[2] + 1])
      if (canGo(...right)) q.push([...right, node[2] + 1])
    }
  }

  return -1
}
// @lc code=end

const maze = [['+', '.', '+', '+', '+', '+', '+'], ['+', '.', '+', '.', '.', '.', '+'], ['+', '.', '+', '.', '+', '.', '+'], ['+', '.', '.', '.', '+', '.', '+'], ['+', '+', '+', '+', '+', '+', '.']]
const entrance = [0, 1]
console.log(nearestExit(maze, entrance))
