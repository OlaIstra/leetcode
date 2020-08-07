/**
 * Initialize your data structure here.
 */
class MyQueue {
    constructor() {
        this.storage = {}
        this.last = 0
        this.first = 0
    }
    
    enqueue(val) {
        this.storage[this.last] = val
        this.last++
    }
    
    dequeue() {
        let first = this.storage[this.first]
        delete this.storage[this.first]
        this.first++
        return first
    }
    
    peek() {
        return this.storage[this.first]
    }
    
    size() {
        return this.last - this.first
    }
    
    isEmpty() {
        return this.last === this.first
    }
    
}


var MyStack = function() {
    this.queue = new MyQueue()
    this.contrQueue = new MyQueue()
    this.length = 0
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.enqueue(x)
    
    while (!this.contrQueue.isEmpty()) {
        this.queue.enqueue(this.contrQueue.dequeue())
    }
    
    let temp = this.queue
    this.queue = this.contrQueue
    this.contrQueue = temp
    this.length++
}
/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    this.length--
    return this.contrQueue.dequeue()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.contrQueue.peek()
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
