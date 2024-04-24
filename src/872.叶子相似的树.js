/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
  const arr1 = []
  const arr2 = []

  const dfs = (node, arr) => {
    if (!node.left && !node.right) {
      arr.push(node.val)
    } else {
      if (node.left) dfs(node.left, arr)
      if (node.right) dfs(node.right, arr)
    }
  }

  dfs(root1, arr1)
  dfs(root2, arr2)

  return arr1.toString() === arr2.toString()
}
// @lc code=end
