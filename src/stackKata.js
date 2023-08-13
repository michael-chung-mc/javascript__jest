function stackFactory () {
    let stack = {
        elements : [],
        isEmpty : function () {return this.elements.length === 0;},
        size : function () { return this.elements.length;},
        push : function (element) {
            if (this.elements.length === 2) throw new Error("Overflow: Past Capacity")
            this.elements.push(element);
        },
        pop : function () {
            if (this.elements.length === 0) throw new Error("Underflow: Empty Can't Pop")
            return this.elements.pop();
        },
    }
    return stack;
}

module.exports = stackFactory;