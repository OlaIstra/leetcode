class MyHashMap {
  constructor() {
    this.array = new Array();
  }
  
  put(key, value) {
    this.array[key] = value;
  }
  
  get(key, value) {
    return this.array[key] === undefined ? -1 : this.array[key]; 
  }
  
  remove(key, value) {
    this.array[key] = undefined;  
  }
}
