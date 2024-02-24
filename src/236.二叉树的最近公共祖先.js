/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  const pathList = []
  const pathNodeList = []

  const dfs = (node, path, pathNode, target) => {
    if (node === null) return
    path.push(node.val)
    pathNode.push(node)
    if (node.val === target) {
      pathList.push(Array.from(path))
      pathNodeList.push(Array.from(pathNode))
    } else {
      dfs(node.left, path, pathNode, target)
      dfs(node.right, path, pathNode, target)
      path.pop()
      pathNode.pop()
    }
  }

  dfs(root, [], [], p.val)
  dfs(root, [], [], q.val)

  const [pPath, qPath] = pathList
  const [pPathNode] = pathNodeList
  for (let i = pPath.length - 1; i >= 0; i--) {
    if (qPath.includes(pPath[i])) {
      return pPathNode[i]
    }
  }
}
// @lc code=end
