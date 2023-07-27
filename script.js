function Node (value) {
    return {
        value: value,
        left: null,
        right: null,
    }
}
// class Node
// {
//     constructor(val)
//     {
//         this.value = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// function NodeFactory (value) {
//     return {
//         value: value,
//         left: null,
//         right: null,
//     }
// }
class Tree
{
    constructor ()
    {
        this.root = null;
        this.getRoot = function () {
            return this.root;
        }
        this.prettyPrint = function () {
        //  console.log(node);
        //     if (node == null) { return; };
        //     console.log(node.value);
        //     console.log(node.value + " r:" + prettyPrint(node.right));
        //     console.log(node.value + " l:" + prettyPrint(node.left));
            let flat = ""
            let q = [];
            q.push(this.root);
            while (q.length > 0){
                let inspect = q.shift();
                if (inspect != null && inspect.value != undefined)
                {
                    flat += inspect.value;
                }
                if (inspect.left != null) {q.push(inspect.left);};
                if (inspect.right != null) {q.push(inspect.right);};
                flat += "-";
            }
            console.log(flat);
        };
        // function buildTree(arr, start, end) {
        //     if (start > end) return null;
        //     var mid = Math.floor((start + end)/2);
    
        // }
        // this.deepCopy = function (parent) {
        //     if (parent == null) { return null; }
        //     let node = new Node(parent.value);
        //     //console.log("deep copy" + parent.value);
        //     node.left = deepCopy(parent.left);
        //     node.right = deepCopy(parent.right);
        //     //console.log(node);
        //     return node;
        // };
        this.buildTreeFromUnique = function (sortedArray, start, end) {
            if (start > end) { return null; }
            let mid = Math.floor((start+end)/2);
            let node = Node(sortedArray[mid]);
            node.left = this.buildTreeFromUnique(sortedArray, start, mid - 1);
            node.right = this.buildTreeFromUnique(sortedArray, mid + 1, end);
            //console.log(node);
            return node;
        };
        this.buildTree = function (inputArray) {
            let arr = JSON.parse(JSON.stringify(Array.prototype.slice.call(inputArray)));
            console.log(arr)
            arr.sort(function(a,b){return a-b});
            arr = arr.filter((item, index) => {return arr.indexOf(item) === index});
            //arr = JSON.parse(JSON.stringify(arr.filter((item, index) => {return arr.indexOf(item) === index})));
            console.log(arr)
            this.root = this.buildTreeFromUnique(arr, 0, arr.length-1);
        };
        // function buildTree(dataArray) {
        //     function buildTreeFromUnique(sortedArray) {
        //         if (sortedArray.length == 0) { return null; }
        //         let mid = Math.floor(sortedArray.length / 2);
        //         //console.log("m:"+ mid);
        //         let node = new Node(sortedArray[mid]);
        //         //let node = NodeFactory(sortedArray[mid]);
        //         //console.log("n:"+node.value);
        //         //left = arr.slice(0,mid);
        //         //right = arr.slice(mid+1, arr.length);
        //         //left = JSON.parse(JSON.stringify(arr.slice(0,mid)))
        //         //right = JSON.parse(JSON.stringify(arr.slice(mid+1, arr.length)))
        //         //console.log(left);
        //         //console.log(right);
        //         //node.left = buildTreeFromUnique(left);
        //         //node.left = buildTreeFromUnique(arr.slice(0,mid));
        //         node.left = buildTreeFromUnique(JSON.parse(JSON.stringify(sortedArray.slice(0,mid))));
        //         //console.log(node.left==null ? "" : "l:"+ node.left.value);
        //         //console.log(node.left.value)
        //         //node.right = buildTreeFromUnique(right);
        //         //node.right = buildTreeFromUnique(arr.slice(mid+1, arr.length));
        //         node.right = buildTreeFromUnique(JSON.parse(JSON.stringify(sortedArray.slice(mid+1, sortedArray.length))));
        //         //console.log(node.left==null ? "" : "r:"+ node.right.value);
        //         //console.log(node.right.value)
        //         //console.log(node);
        //         return node;
        //         //return NodeFactory(arr[mid],buildTreeFromUnique(arr.slice(0,mid)),buildTreeFromUnique(arr.slice(mid+1, arr.length)));
        //     }
        //     let arr = JSON.parse(JSON.stringify(Array.prototype.slice.call(dataArray)));
        //     console.log(arr)
        //     arr.sort();
        //     arr = arr.filter((item, index) => {return arr.indexOf(item) === index});
        //     //arr = JSON.parse(JSON.stringify(arr.filter((item, index) => {return arr.indexOf(item) === index})));
        //     console.log(arr)
        //     root = buildTreeFromUnique(arr);
        //     //prettyPrint(this.root);
        //     return root;
        // };
        this.insertNode = function (node) {
            console.log(`inserting: ${node.value} to ${this.root}`);
            let nodeParent = null;
            let pointer = this.root;
            //let pointer = deepCopy(this.root);
            //prettyPrint(pointer);
            while (pointer != null)
            {
                nodeParent = pointer;
                if (node.value < pointer.value) { pointer = pointer.left; }
                else if (node.value > pointer.value) {pointer = pointer.right;}
                else if (node.value == pointer.value) { break; }
            }
            if (nodeParent == null) {
                let oldRoot = this.root;
                if (node.value < oldRoot.value) {node.right = oldRoot; }
                else {node.left = oldRoot; }
                this.root = node;
            }
            else if (node.value < nodeParent.value) {nodeParent.left = node; }
            else {nodeParent.right = node; }
        };
        this.insert = function (value) {
            this.insertNode(new Node(value));
        };
        this.delete = function (value) {
            let parent = this.root;
            let pointer = this.root;
            let right = false;
            while (pointer !=null && pointer.value != value)
            {
                parent = pointer;
                if (pointer.value < value)
                {
                    pointer = pointer.right;
                    right = true;
                }
                else if (pointer.value > value)
                {
                    pointer = pointer.left;
                    right = false;
                }
            }
            if (pointer == null)
            {
                console.log(`couldn't delete ${value} as it does not exist`)
                return;
            }
            if (pointer.right == null && pointer.left == null)
            {
                right ? parent.right = null : parent.left = null;
            }
            else if (pointer.right == null && pointer.left != null)
            {
                right ? parent.right = pointer.left : parent.left = pointer.left;
            }
            else if (pointer.right != null && pointer.left == null)
            {
                right ? parent.right = pointer.right : parent.left = pointer.right;
            }
            else
            {
                let successorParent = pointer;
                let successor = pointer.right;
                while (successor.left != null)
                {
                    successorParent = successor;
                    successor = successor.left;
                }
                //pointer.value = successor.value;
                if (this.root.value == value)
                {
                    this.root.value = successor.value;
                    successorParent.left = null;
                }
                else
                {
                    right ? parent.right = successor : parent.left = successor;
                    successorParent.left = null;
                }
            }
        };
        this.find = function (value) {
            let pointer = this.root;
            while (pointer != null)
            {
                if (value > pointer.value) { pointer = pointer.right; }
                else if (value < pointer.value) { pointer = pointer.left; }
                else { return pointer; }
            }
            return null;
        };
        this.levelOrder = function (func) {
            let arr = []
            if (func == null)
            {
                func = (node) => { arr.push(node.value) }
            }
            let q = [];
            q.push(this.root);
            while (q.length > 0){
                let inspect = q.pop();
                if (inspect != null && inspect.value != undefined)
                {
                    func(inspect);
                }
                if (inspect.right != null) {q.push(inspect.right);};
                if (inspect.left != null) {q.push(inspect.left);};
            }
            if (arr.length > 0)
            {
                return arr;
            }
        };
        this.inTraverse = function (node, func) {
            if (node != null) {
                this.inTraverse(node.left, func);
                func(node);
                this.inTraverse(node.right, func);
            }
        };
        this.inOrder = function (func) {
            if (func == null)
            {
                let arr = []
                this.inTraverse(this.root, (node) => { arr.push(node.value); })
                return arr;
            }
            else
            {
                this.inTraverse(this.root, func);
            }
        };
        this.preTraverse = function (node, func) {
            if (node != null) {
                func(node);
                this.preTraverse(node.left, func);
                this.preTraverse(node.right, func);
            }
        };
        this.preOrder = function (func) {
            if (func == null)
            {
                let arr = []
                this.preTraverse(this.root, (node) => { arr.push(node.value); })
                return arr;
            }
            else
            {
                this.preTraverse(this.root, func);
            }
        };
        this.postTraverse = function (node, func) {
            if (node != null) {
                this.postTraverse(node.left, func);
                this.postTraverse(node.right, func);
                func(node);
            }
        };
        this.postOrder = function (func) {
            if (func == null)
            {
                let arr = []
                this.postTraverse(this.root, (node) => { arr.push(node.value); })
                return arr;
            }
            else
            {
                this.postTraverse(this.root, func);
            }
        };
        this.height = function (node) {
            if (node == null)
            {
                return 0
            }
            return Math.max(1 + this.height(node.left), 1 + this.height(node.right));
        }
        this.depth = function (node) {
            return this.height(this.root) - this.height(node);
        };
        this.balanced = function () {
            return Math.abs(this.height(this.root.left) - this.height(this.root.right)) < 2;
        };
        this.rebalance = function () {
            let arr = [];
            this.postTraverse(this.root, (node) => { arr.push(node.value); })
            this.buildTree(arr);
        }
    }
}

const Test = (() => {
    function randomArray(length) {
        arr = []
        for (let i = 0; i < length; i++)
        {
            arr.push(Math.floor((Math.random()* 11)));
        }
        return arr;
    }
    const bst = new Tree();
    console.log("made tree");
    console.log(bst.getRoot());

    console.log("grow tree");
    let input = [1,2,3,4,5,6,7,8,9];
    console.log(input);
    bst.buildTree(input);
    console.log(bst.getRoot());
    bst.prettyPrint();
    console.log(bst.getRoot());

    console.log("finding 4");
    console.log(bst.find(4));
    bst.prettyPrint();

    console.log("insert 1124");
    bst.insert(1124);
    console.log(bst.getRoot());
    bst.prettyPrint();

    console.log("delete 2");
    bst.delete(2);
    console.log(bst.getRoot());
    bst.prettyPrint();
    console.log("delete 5");
    bst.delete(5);
    console.log(bst.getRoot());
    bst.prettyPrint();
    console.log("delete 1124");
    bst.delete(1124);
    console.log(bst.getRoot());
    bst.prettyPrint();

    console.log(bst.find(4));
    console.log("level-order");
    console.log(bst.getRoot());
    bst.levelOrder((node)=>{console.log(node);});
    console.log(bst.levelOrder());
    console.log("in-order");
    console.log(bst.getRoot());
    bst.inOrder((node)=>{console.log(node);});
    console.log(bst.inOrder());
    console.log("pre-order");
    console.log(bst.getRoot());
    bst.preOrder((node)=>{console.log(node);});
    console.log(bst.preOrder());
    console.log("post-order");
    console.log(bst.getRoot());
    bst.postOrder((node)=>{console.log(node);});
    console.log(bst.postOrder());

    bst.prettyPrint();
    console.log("height of tree");
    console.log(bst.height(bst.getRoot()));
    console.log("height of left");
    console.log(bst.depth(bst.getRoot().left));

    console.log(`is balanced ${bst.balanced()}`);
    bst.insert(100);
    bst.insert(150);
    console.log(`is balanced ${bst.balanced()}`);
    console.log(bst.getRoot());
    bst.prettyPrint();

    console.log("rebalancing");
    bst.rebalance();
    console.log(`is balanced ${bst.balanced()}`);
    console.log(bst.getRoot());
    bst.prettyPrint();
})();

const Driver = (() => {

})