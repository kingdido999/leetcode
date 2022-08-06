interface MinItem {
  min: number
  val: number
}

class MinStack {
  private stack: MinItem[]

  constructor() {
    this.stack = []
  }

  push(val: number): void {
    let min: number

    if (this.stack.length === 0) {
      min = val
    } else {
      min = Math.min(this.getMin(), val)
    }

    this.stack.push({
      min,
      val
    })
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.topItem().val
  }

  getMin(): number {
    return this.topItem().min
  }

  private topItem(): MinItem {
    return this.stack[this.stack.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
