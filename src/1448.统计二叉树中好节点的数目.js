/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
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
const goodNodes = function (root) {
  let count = 0

  const dfs = (root, max) => {
    if (root === null) return

    if (root.val >= max) {
      max = root.val
      count++
    }

    if (root.left) dfs(root.left, max)
    if (root.right) dfs(root.right, max)
  }

  dfs(root, -Infinity)
  return count
}
// @lc code=end
