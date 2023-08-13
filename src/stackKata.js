function stackFactory () {
    let stack = {
        count : 0,
        isEmpty : function () {return this.count === 0;},
        size : function () { return this.count;},
        push : function () {
            if (this.count === 2) throw new Error("Past Capacity")
            this.count += 1;
        },
        pop : function () {
            if (this.count === 0) throw new Error("Empty Can't Pop")
            this.count -= 1;
        },
    }
    return stack;
}

module.exports = stackFactory;