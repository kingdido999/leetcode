// https://leetcode.com/problems/time-based-key-value-store/
interface Item {
  timestamp: number
  value: string
}

class TimeMap {
  private map: Map<string, Item[]>

  constructor() {
    this.map = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    const items = this.map.get(key) ?? []
    items.push({ timestamp, value })
    this.map.set(key, items)
  }

  get(key: string, timestamp: number): string {
    const items = this.map.get(key) ?? []
    let l = 0
    let r = items.length - 1
    let res = ""

    while (l <= r) {
      const m = Math.floor((l + r) / 2)

      if (items[m].timestamp <= timestamp) {
        // Store the current value and keep search to the right in case
        // there is a closer timestamp
        res = items[m].value
        l = m + 1
      } else {
        r = m - 1
      }
    }

    return res
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
