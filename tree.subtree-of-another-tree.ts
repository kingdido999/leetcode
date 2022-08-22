// https://leetcode.com/problems/subtree-of-another-tree/
import TreeNode from './domain/tree-node'
import isSameTree from './tree.same-tree'

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // null is always a subtree of any tree
  if (subRoot === null) {
    return true
  }

  // A non-null tree must not be a subtree of null
  if (root === null) {
    return false
  }

  if (isSameTree(root, subRoot)) {
    return true
  }

  const isLeftSame = isSameTree(root.left, subRoot)
  const isRightSame = isSameTree(root.right, subRoot)

  if (isLeftSame || isRightSame) {
    return true
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
