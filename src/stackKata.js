function stackFactory () {
    let stack = {
        count : 0,
        empty : true,
        isEmpty : function () {return this.empty;},
        size : function () { return this.count;},
        push : function () {
            this.empty = false;
            this.count += 1;
        },
    }
    return stack;
}

module.exports = stackFactory;