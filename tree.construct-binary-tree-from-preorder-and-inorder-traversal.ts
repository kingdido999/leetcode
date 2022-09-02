// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
import TreeNode from "./domain/tree-node";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) return null;

  // The first item in preorder traversal must be the root
  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);

  // pre: [3,9,20,15,7].
  // [9] => left subtree's preorder, [20,15,7] => right subtree's inorder
  //
  // in:  [9,3,15,20,7]
  // [9] => right subtree's preorder, [15,20,7] => right subtree's inorder
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}
