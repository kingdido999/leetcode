// https://leetcode.com/problems/add-two-numbers/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode()
  let curr = dummy
  let a = l1
  let b = l2
  // carry over 1 if previous sum > 9
  let carry = 0

  while (a !== null || b !== null || carry === 1) {
    const aVal = a?.val ?? 0
    const bVal = b?.val ?? 0
    const sum = carry + aVal + bVal
    carry = sum > 9 ? 1 : 0

    curr.next = new ListNode(sum % 10)
    curr = curr.next
    a = a?.next ?? null
    b = b?.next ?? null
  }

  return dummy.next
};
