/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
  const path = []
  const list = []

  const dfs = (node, targetSum) => {
    if (node === null) return
    path.push(node.val)
    targetSum -= node.val
    if (node.left === null && node.right === null && targetSum === 0) list.push(Array.from(path))
    dfs(node.left, targetSum)
    dfs(node.right, targetSum)
    path.pop()
  }

  dfs(root, targetSum)
  return list
}
// @lc code=end
