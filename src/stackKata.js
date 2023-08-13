function stackFactory (capacity = 2) {
    if (capacity < 1) throw new Error ("Invalid Capacity");
    const maxCapacity = capacity;
    let elements = [];
    let stack = {
        isEmpty : function () {return elements.length === 0;},
        size : function () { return elements.length;},
        push : function (element) {
            if (elements.length === maxCapacity) throw new Error("Overflow: Past Capacity")
            elements.push(element);
        },
        pop : function () {
            if (elements.length === 0) throw new Error("Underflow: Empty Can't Pop")
            return elements.pop();
        },
    };
    return stack;
}

module.exports = stackFactory;