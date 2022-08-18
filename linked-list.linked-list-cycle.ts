// https://leetcode.com/problems/linked-list-cycle/
class ListNode {
  val: number
  next: ListNode
}

function hasCycle(head: ListNode | null): boolean {
  if (head === null) {
    return false
  }

  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    // The fast pointer goes twice as fast as the slow pointer such that
    // if there is a cycle, they must meet at some point
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
};
