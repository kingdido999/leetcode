// https://leetcode.com/problems/invert-binary-tree/
import TreeNode from './domain/tree-node'

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null
  }

  const invertedRight = invertTree(root.right)
  const invertedLeft = invertTree(root.left)
  root.left = invertedRight
  root.right = invertedLeft

  return root
};
