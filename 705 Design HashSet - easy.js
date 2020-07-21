/**
 * Initialize your data structure here.
 */
class MyHashSet {
    constructor() {
        this.hash = {}
    }
    
    add(value) {
        if (this.hash[value] === undefined) {
            this.hash[value] = true
        }
    }
    
    contains(value) {
       return this.hash[value]
            ? true
            : false
    }
    
    remove(value) {
        if (this.hash[value]) {
            delete this.hash[value]
        }
    }
    
};
