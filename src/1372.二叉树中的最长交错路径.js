/*
 * @lc app=leetcode.cn id=1372 lang=javascript
 *
 * [1372] 二叉树中的最长交错路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestZigZag = function (root) {
  const getPathCount = (path) => {
    if (path.length === 0) return 0

    let max = 1
    let count = 1
    let lastDirection = path[0]
    for (let i = 1; i < path.length; i++) {
      if (path[i] === lastDirection) {
        count = 1
      } else {
        count++
        max = Math.max(max, count)
        lastDirection = path[i]
      }
    }
    return max
  }

  let max = -Infinity
  const dfs = (root, path) => {
    if (root.left === null && root.right === null) {
      max = Math.max(max, getPathCount(path))
    }
    if (root.left) {
      path.push('left')
      dfs(root.left, path)
    }
    if (root.right) {
      path.push('right')
      dfs(root.right, path)
    }
    path.pop()
  }

  dfs(root, [])
  return max
}
// @lc code=end
