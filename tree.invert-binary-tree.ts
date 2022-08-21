// https://leetcode.com/problems/invert-binary-tree/
interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null
  }

  const invertedRight = invertTree(root.right)
  const invertedLeft = invertTree(root.left)
  root.left = invertedRight
  root.right = invertedLeft

  return root
};
