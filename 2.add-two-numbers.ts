/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let origin: ListNode | null = null
  let current: ListNode | null = null
  let carry = 0

  let first = l1
  let second = l2
  while (first || second || carry) {
    const partialSum = (first?.val ?? 0) + (second?.val ?? 0) + carry
    const nextNode = new ListNode(partialSum % 10)
    carry = (partialSum - nextNode.val) / 10

    if (!origin) current = origin = nextNode
    else current = current.next = nextNode

    first = first?.next
    second = second?.next
  }

  if (!origin) origin = new ListNode(0)
  return origin
};
// @lc code=end

