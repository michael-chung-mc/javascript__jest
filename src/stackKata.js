function stackFactory () {
    let stack = {
        count : 0,
        element : null,
        isEmpty : function () {return this.count === 0;},
        size : function () { return this.count;},
        push : function (element) {
            if (this.count === 2) throw new Error("Overflow: Past Capacity")
            this.element = element;
            this.count += 1;
        },
        pop : function () {
            if (this.count === 0) throw new Error("Underflow: Empty Can't Pop")
            this.count -= 1;
            return this.element;
        },
    }
    return stack;
}

module.exports = stackFactory;