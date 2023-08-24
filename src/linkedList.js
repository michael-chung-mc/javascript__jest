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
            if (index < 0 || index > this.size() ) { return; }
            if (index == 1)
            {
                this.prepend(value);
            }
            else
            {
                let node = this.at(index-1);
                if (node)
                {
                    if (node.next)
                    {
                        let newNode = new Node(value, node.next);
                        node.next = newNode;
                    }
                    else
                    {
                        this.append(value);
                    }
                }
            }
        }
        this.removeAt = function (index) {
            if (index < 0 || index > this.size() ) { return; }
            if (index == 1)
            {
                this.first = this.first.next ? this.first.next : null
            }
            else
            {
                let parent = this.at(index-1);
                let grandchild = parent.next ? parent.next.next : null;
                if (grandchild)
                {
                    parent.next = grandchild;
                }
                else
                {
                    parent.next = null
                }
            }
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
    list.insertAt(761,1);
    console.log(list.toString());
    list.insertAt(763,3);
    console.log(list.toString());
    list.insertAt(762,2);
    console.log(list.toString());
    list.insertAt(764,4);
    console.log(list.toString());
    list.removeAt(1);
    console.log(list.toString());
    list.removeAt(5);
    console.log(list.toString());
    list.removeAt(6);
    console.log(list.toString());
    list.removeAt(3);
    console.log(list.toString());
})();