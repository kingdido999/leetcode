// https://leetcode.com/problems/reverse-linked-list/
import ListNode from './domain/list-node'

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }

  let l = null
  let m = head
  let r = head.next

  while (m !== null) {
    // Reverse the link and move the pointers forward
    m.next = l
    l = m
    m = r

    if (r !== null) {
      r = r.next
    }
  }

  return l
};
