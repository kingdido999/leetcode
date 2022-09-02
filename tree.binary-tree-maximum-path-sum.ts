// https://leetcode.com/problems/binary-tree-maximum-path-sum/
import TreeNode from "./domain/tree-node";

function maxPathSum(root: TreeNode | null): number {
  let maxSum = Number.MIN_SAFE_INTEGER;
  dfs(root);
  return maxSum;

  function dfs(node: TreeNode) {
    if (node === null) {
      return 0;
    }

    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);

    // Update the global max if needed
    const newMax = node.val + leftMax + rightMax;
    maxSum = Math.max(maxSum, newMax);

    // Return the max sum without split
    return node.val + Math.max(leftMax, rightMax);
  }
}
