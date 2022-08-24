import TreeNode from "./domain/tree-node";

interface LevelTreeNode {
  node: TreeNode;
  level: number;
}

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  // Each view index represents a level and stores the right-most node value
  let view = [];

  // Traverse the tree using BFS and push the nodes from right to left
  let q: LevelTreeNode[] = [{ node: root, level: 0 }];

  while (q.length > 0) {
    const { node, level } = q.shift();

    if (view[level] === undefined) {
      // Set the node value for the level if it hasn't been set before
      view[level] = node.val;
    }

    // We push the right node first into the queue such that
    // when it comes to a new level, the right-most node
    // will be set first and the rest nodes in the same
    // level will be effectively ignored
    if (node.right !== null) {
      q.push({ node: node.right, level: level + 1 });
    }

    if (node.left !== null) {
      q.push({ node: node.left, level: level + 1 });
    }
  }

  return view;
}
