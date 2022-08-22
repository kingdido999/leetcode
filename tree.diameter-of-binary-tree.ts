// https://leetcode.com/problems/diameter-of-binary-tree/
import TreeNode from './domain/tree-node'

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0
  longestPath(root)
  return maxDiameter

  function longestPath(node: TreeNode | null) {
    if (node === null) {
      return 0
    }

    const leftPath = longestPath(node.left)
    const rightPath = longestPath(node.right)

    // Update the max diameter if leftPath + rightPath is longer
    maxDiameter = Math.max(maxDiameter, leftPath + rightPath)

    // Return the longest path
    return 1 + Math.max(leftPath, rightPath)
  }
};


