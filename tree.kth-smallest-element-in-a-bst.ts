// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
import TreeNode from "./domain/tree-node";

function kthSmallest(root: TreeNode | null, k: number): number {
  let visited = [];

  // Do a in-order DFS on the binary search tree would visit nodes in ascending order
  inOrderDfs(root);

  return visited[k - 1];

  function inOrderDfs(node: TreeNode | null) {
    if (node === null) {
      return;
    }

    inOrderDfs(node.left);
    visited.push(node.val);
    inOrderDfs(node.right);
  }
}
