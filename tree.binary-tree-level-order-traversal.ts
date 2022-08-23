// https://leetcode.com/problems/binary-tree-level-order-traversal/
import TreeNode from "./domain/tree-node";

interface LevelTreeNode {
  node: TreeNode;
  level: number;
}

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  let res = [];

  // Use the queue to store each node visited via BFS along with its level
  let q: LevelTreeNode[] = [{ node: root, level: 0 }];

  while (q.length > 0) {
    const { node, level } = q.shift();

    if (!res[level]) {
      res[level] = [];
    }

    res[level].push(node.val);

    if (node.left !== null) {
      q.push({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      q.push({ node: node.right, level: level + 1 });
    }
  }

  return res;
}
