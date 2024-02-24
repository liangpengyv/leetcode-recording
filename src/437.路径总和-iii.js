/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
const pathSum = function (root, targetSum) {
  if (root === null) return 0

  const rootSum = (root, targetSum) => {
    if (root === null) return 0

    let count = 0

    if (root.val === targetSum) count++

    count += rootSum(root.left, targetSum - root.val)
    count += rootSum(root.right, targetSum - root.val)
    return count
  }

  let count = rootSum(root, targetSum)
  count += pathSum(root.left, targetSum)
  count += pathSum(root.right, targetSum)
  return count
}
// @lc code=end
