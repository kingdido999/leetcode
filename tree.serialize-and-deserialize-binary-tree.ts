import TreeNode from "./domain/tree-node";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let res = [];

  // Build a preorder traversal of node values
  preorder(root);

  return res.join(",");

  function preorder(node: TreeNode | null) {
    if (node === null) {
      res.push("N");
      return;
    }

    res.push(node.val.toString());
    preorder(node.left);
    preorder(node.right);
  }
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const vals = data.split(",");

  // To track of current position of the node value from the list
  let i = 0;

  // Build the tree from the preorder traversal
  return dfs();

  function dfs(): TreeNode | null {
    if (vals[i] === "N") {
      i++;
      return null;
    }

    const node = new TreeNode(parseInt(vals[i]));
    i++;
    node.left = dfs();
    node.right = dfs();
    return node;
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
