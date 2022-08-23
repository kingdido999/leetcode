// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
import TreeNode from "./domain/tree-node";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) {
    return null;
  }

  if (root === p || root === q) {
    // If p or q is the root, then root is LCA
    return root;
  }

  const pInLeft = isDescendant(root.left, p);
  const qInRight = isDescendant(root.right, q);

  if (pInLeft && qInRight) {
    // If p is in left subtree and q is in right subtree,
    // then the current root must be the LCA
    return root;
  }

  if (!pInLeft && !qInRight) {
    // If p is in right subtree and q is in left subtree,
    // then the current root must be the LCA
    return root;
  }

  if (pInLeft && !qInRight) {
    // If both p and q are in left subtree, then keep
    // searching LCA down the left subtree
    return lowestCommonAncestor(root.left, p, q);
  }

  if (!pInLeft && qInRight) {
    // if both p and q are in right subtree, then keep
    // searching LCA down the right subtree
    return lowestCommonAncestor(root.right, p, q);
  }
}

function isDescendant(root: TreeNode | null, node: TreeNode | null) {
  if (root === null) {
    return false;
  }

  if (root === node) {
    return true;
  }

  return isDescendant(root.left, node) || isDescendant(root.right, node);
}
