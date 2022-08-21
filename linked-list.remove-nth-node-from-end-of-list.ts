// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
import ListNode from './domain/list-node'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return head
  }

  let dummy = new ListNode()
  dummy.next = head
  let l = dummy
  let r = dummy

  // Make the left and right pointers n nodes apart
  for (let i = 0; i < n; i++) {
    r = r.next
  }

  // Move the left and right pointers to the right until the right pointer
  // reaches the last node
  while (r !== null && r.next !== null) {
    l = l.next
    r = r.next
  }

    // Remove the node immediately after the left node, i.e., the Nth node
  l.next = l.next.next

  return dummy.next
};
