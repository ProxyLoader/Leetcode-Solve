
var MyStack = function() {
    this.array = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.array.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.array.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.array[this.array.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.array.length === 0) return true;
    return false;
};
