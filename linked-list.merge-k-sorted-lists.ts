// https://leetcode.com/problems/merge-k-sorted-lists/
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null
  }

  while (lists.length > 1) {
    // Remove two lists from the start and merge them together
    const mergedList = mergeTwoLists(lists.shift(), lists.shift())

    // Push the merged list to the end
    lists.push(mergedList)
  }

  return lists[0]
};

function mergeTwoLists(a: ListNode, b: ListNode): ListNode | null {
  let dummy = new ListNode()
  let curr = dummy

  while (a !== null && b !== null) {
    if (a.val >= b.val) {
      curr.next = new ListNode(b.val)
      b = b.next
    } else {
      curr.next = new ListNode(a.val)
      a = a.next
    }

    curr = curr.next
  }

  if (a !== null) {
    curr.next = a
  } else if (b !== null) {
    curr.next = b
  }

  return dummy.next
}
