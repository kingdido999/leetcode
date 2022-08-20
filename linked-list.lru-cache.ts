// https://leetcode.com/problems/lru-cache/
interface DoubleLinkedListNode {
  key: number
  value: number
  prev: DoubleLinkedListNode | null
  next: DoubleLinkedListNode | null
}

class LRUCache {
  private capacity: number
  private cache: Map<number, DoubleLinkedListNode>

  // Most recently used node
  private mru: DoubleLinkedListNode

  // Least recently used node
  private lru: DoubleLinkedListNode

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1
    }

    const node = this.cache.get(key)
    this.updateMostRecentlyUsedNode(node)
    return node.value
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)
      node.value = value
      this.cache.set(key, node)
      this.updateMostRecentlyUsedNode(node)
      return
    }

    if (this.cache.size === this.capacity) {
      // Delete the LRU entry from the map
      this.cache.delete(this.lru.key)

      if (this.mru === this.lru) {
        // Only one node left
        this.mru = null
        this.lru = null
      } else {
        // Move LRU pointer to the previous node
        this.lru = this.lru.prev
        this.lru.next = null
      }
    }

    const node: DoubleLinkedListNode = { key, value, prev: null, next: this.mru }

    if (this.mru) {
      this.mru.prev = node
    } else {
      // No node exists yet
      this.lru = node
    }

    this.mru = node
    this.cache.set(key, node)
  }

  private updateMostRecentlyUsedNode(node: DoubleLinkedListNode): void {
    if (node === this.mru) {
      return
    }

    if (node.prev) {
      node.prev.next = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    }

    if (node === this.lru) {
      // If the node is the LRU, then we need to set LRU to the previous node
      this.lru = node.prev
    }

    // Append the node before the MRU
    node.prev = null
    node.next = this.mru
    this.mru.prev = node

    // Update MRU
    this.mru = node
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
