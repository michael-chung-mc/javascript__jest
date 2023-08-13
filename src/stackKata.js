function stackFactory () {
    let stack = {
        empty : true,
        isEmpty : function () {return this.empty;},
        size : function () { return 0;},
        push : function () { this.empty = false; },
    }
    return stack;
}

module.exports = stackFactory;