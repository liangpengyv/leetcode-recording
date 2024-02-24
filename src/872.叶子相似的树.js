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
  const dfs = (node, list) => {
    if (!node.left && !node.right) {
      list.push(node.val)
    } else {
      if (node.left) dfs(node.left, list)
      if (node.right) dfs(node.right, list)
    }
  }

  const list1 = []
  const list2 = []
  dfs(root1, list1)
  dfs(root2, list2)

  return list1.toString() === list2.toString()
}
// @lc code=end
