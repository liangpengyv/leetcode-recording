/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
  if (root === null) return null

  if (root.val > key) {
    root.left = deleteNode(root.left, key)
    return root
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key)
    return root
  }

  if (root.val === key) {
    if (root.left === null && root.right === null) return null
    if (root.left === null) return root.right
    if (root.right === null) return root.left

    let target = root.right
    while (target.left) {
      target = target.left
    }
    root.right = deleteNode(root.right, target.val)

    target.left = root.left
    target.right = root.right
    return target
  }
}
// @lc code=end
