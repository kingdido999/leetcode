// https://leetcode.com/problems/balanced-binary-tree/
import TreeNode from './domain/tree-node'

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true
  }

  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)
  const heightDiff = Math.abs(leftHeight - rightHeight)

  if (heightDiff > 1) {
    return false
  }

  return isBalanced(root.left) && isBalanced(root.right)
};

function getHeight(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }

  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)
  return 1 + Math.max(leftHeight, rightHeight)
}
