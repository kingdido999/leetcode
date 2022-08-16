// https://leetcode.com/problems/copy-list-with-random-pointer/
class RandomNode {
   val: number
    next: RandomNode | null
    random: RandomNode | null
    constructor(val?: number, next?: RandomNode, random?: RandomNode) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

function copyRandomList(head: RandomNode | null): RandomNode | null {
  const originalToCopy = new Map<RandomNode | null, RandomNode | null>()
  originalToCopy.set(null, null)
  let curr = head

  // Create a mapping from original node to the copy node (value only)
  while (curr !== null) {
    originalToCopy.set(curr, new RandomNode(curr.val))
    curr = curr.next
  }

  curr = head

  // Update copy node's next and random to the corresponding copy node
  // based on the original node from the map
  while (curr !== null) {
    const copy = originalToCopy.get(curr)
    copy.next = originalToCopy.get(curr.next)
    copy.random = originalToCopy.get(curr.random)
    curr = curr.next
  }

  return originalToCopy.get(head)
};
