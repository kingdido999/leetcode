// https://leetcode.com/problems/maximum-depth-of-binary-tree/
import TreeNode from './domain/tree-node'

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }

  const leftMaxDepth = maxDepth(root.left)
  const rightMaxDepth = maxDepth(root.right)
  return 1 + Math.max(leftMaxDepth, rightMaxDepth)
};
