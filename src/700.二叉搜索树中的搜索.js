/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
  if (root === null) return null

  const q = [root]
  while (q.length > 0) {
    let size = q.length
    while (size--) {
      const node = q.shift()
      if (node.val === val) return node
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return null
}
// @lc code=end
