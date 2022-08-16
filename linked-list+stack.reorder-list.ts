 class ListNode {
  val: number
  next: ListNode | null
 }

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let stack = []
  let curr = head

  // Push nodes onto stack
  while (curr !== null) {
    stack.push(curr)
    curr = curr.next
  }

  let dummy = new ListNode()

  // Example: bottom [1,2,3,4,5] top
  //
  // Connect the bottom node to the top node, e.g.,
  // 1->5
  // 2->4
  // 3->null
  //
  // Dummy node is used to connect the previous bottom node to the next top node
  // such that 1->5->2->4->3->null
  while (stack.length > 0) {
    const bot = stack.shift()
    let top = stack.pop()

    if (top === undefined) {
      // If the top node doesn't exist, set it to null
      top = null
    } else {
      // Cut the next link so there is no cycle
      top.next = null
    }

    // Connect the bottom node to the top node
    bot.next = top

    dummy.next = bot
    // Move dummy node to the next bottom node
    dummy = dummy.next.next
  }
};
