// https://leetcode.com/problems/validate-binary-search-tree/
import TreeNode from "./domain/tree-node";

function isValidBST(root: TreeNode | null): boolean {
  return isInRange(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function isInRange(node: TreeNode | null, min: number, max: number): boolean {
  if (node === null) {
    return true;
  }

  if (node.val <= min || node.val >= max) {
    return false;
  }

  return (
    isInRange(node.left, min, node.val) && isInRange(node.right, node.val, max)
  );
}
