function stackFactory () {
    let stack = {
        isEmpty : function () {return true;},
        size : function () { return 0;},
    }
    return stack;
}

module.exports = stackFactory;