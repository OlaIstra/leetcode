/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.array = nums.sort((a, b) => b - a)
    this.idx = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    const length = this.array.length;
    if( length ===0 ){
        this.array.push(val);
        return val;
    }
    
    for(let i = 0; i < length ; i++){
        if(val > this.array[i]) {
            this.array.splice(i,0,val);
            break;
        }
        if(i > this.idx){
            return this.array[this.idx - 1];
        }
        if(i === length-1){
            this.array.push(val);
            break;
        }
    }
    return this.array[this.idx - 1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
