import TreeNode from "./domain/tree-node";

function goodNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let count = 0;
  dfs(root, Number.MIN_SAFE_INTEGER);
  return count;

  function dfs(node: TreeNode | null, max: number) {
    if (node === null) {
      return;
    }

    if (node.val >= max) {
      // Increment the good nodes count if the current node value
      // is greater than or equal to the max value so far
      count++;
      max = node.val;
    }

    dfs(node.left, max);
    dfs(node.right, max);
  }
}
