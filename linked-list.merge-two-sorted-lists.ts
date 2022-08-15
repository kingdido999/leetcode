// https://leetcode.com/problems/merge-two-sorted-lists/
class ListNode {
  val: number
  next: ListNode | null
 }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head = new ListNode()
  let curr = head
  let a = list1
  let b = list2

  // Construct the next node by picking the node with smaller value
  while (a !== null && b !== null) {
    if (a.val <= b.val) {
      curr.next = a
      a = a.next
    } else {
      curr.next = b
      b = b.next
    }

    curr = curr.next
  }

  // If there is unused node, link the next node to it
  if (a !== null) {
    curr.next = a
  } else if (b !== null) {
    curr.next = b
  }

  return head.next
};
