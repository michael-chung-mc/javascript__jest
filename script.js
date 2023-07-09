class Node {
    constructor (val, node)
    {
        this.value = val,
        this.next = node
    }
};

class LinkedList {
    constructor (data)
    {
        this.first = new Node(data,null);
        this.append = function (data) {
            let pointer = this.first;
            while (pointer.next)
            {
                pointer = pointer.next;
            }
            pointer.next = new Node(data,null);
        }
        this.prepend = function (data) {
            this.first = new Node(data, this.first);
        }
        this.size = function () {
            let size = 0;
            let pointer = this.first;
            while (pointer)
            {
                size += 1;
                pointer = pointer.next;
            }
            return size;
        }
        this.head = function () {
            return this.first;
        }
        this.tail = function () {
            let pointer = this.first;
            while (pointer.next)
            {
                pointer = pointer.next;
            }
            return pointer;
        }
        this.at = function (index) {
            if (index < 1) { return null; }
            let i = 1;
            let pointer = this.first;
            while (i < index && pointer)
            {
                pointer = pointer.next;
                i += 1;
            }
            return pointer;
        }
        this.pop = function () {
            let parent = this.first;
            if (parent.next != null) {
                let pointer = parent.next;
                while (pointer.next)
                {
                    parent = parent.next;
                    pointer = pointer.next;
                }
                parent.next = null;
            }
        }
        this.contains = function(value) {
            let pointer = this.first;
            while (pointer)
            {
                if (pointer.value == value) { return true; }
                pointer = pointer.next;
            }
            return false;
        }
        this.find = function(value) {
            let index = 1;
            let pointer = this.first;
            while (pointer)
            {
                if (pointer.value == value) { return index; }
                pointer = pointer.next;
                index += 1;
            }
            return -1;
        }
        this.toString = function () {
            let str = "";
            let spacer = " -> ";
            let pointer = this.first;
            while (pointer)
            {
                str += pointer.value;
                str += spacer;
                pointer = pointer.next;
            }
            return str;
        }
        this.insertAt = function (value, index) {
            let parent = this.at(index-1);
            let newNode = new Node(value, parent.next);
            parent.next = newNode;

        }
    }
}

const Main = (() => {
    function getRandom(bound) {
        return Math.floor((Math.random()* bound));
    };
    function printLinked (node) {
        let str = "";
        let pointer = node;
        while (pointer)
        {
            str += (pointer.value + "-");
            pointer = pointer.next;
        }
        console.log(str);
    }
    let list = new LinkedList(1);
    printLinked(list.first);
    list.append(2)
    printLinked(list.first);
    list.prepend(3)
    printLinked(list.first);
    console.log("size: " + list.size());
    console.log(list.head());
    console.log(list.tail());
    console.log(list.at(1));
    console.log(list.at(2));
    console.log(list.at(3));
    console.log(list.at(4));
    console.log(list.at(-1));
    list.pop()
    printLinked(list.first)
    console.log(list.contains(3));
    console.log(list.contains(1));
    console.log(list.contains(4));
    console.log(list.find(3));
    console.log(list.find(1));
    console.log(list.find(4));
    console.log(list.toString());
    console.log(list.insertAt(1));
})();