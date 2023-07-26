class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
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
        this.prettyPrint = function (node) {
        //  console.log(node);
        //     if (node == null) { return; };
        //     console.log(node.value);
        //     console.log(node.value + " r:" + prettyPrint(node.right));
        //     console.log(node.value + " l:" + prettyPrint(node.left));
            let flat = ""
            let q = [];
            q.push(node);
            while (q.length > 0){
                let inspect = q.pop();
                if (inspect != null && inspect.value != undefined)
                {
                    flat += inspect.value;
                }
                if (inspect.right != null) {q.push(inspect.right);};
                if (inspect.left != null) {q.push(inspect.left);};
                flat += "-";
            }
            console.log(flat);
        };
        // function buildTree(arr, start, end) {
        //     if (start > end) return null;
        //     var mid = Math.floor((start + end)/2);
    
        // }
        this.deepCopy = function (parent) {
            if (parent == null) { return null; }
            let node = new Node(parent.value);
            //console.log("deep copy" + parent.value);
            node.left = deepCopy(parent.left);
            node.right = deepCopy(parent.right);
            //console.log(node);
            return node;
        };
        this.buildTree = function (inputArray) {
            function buildTreeFromUnique(sortedArray, start, end) {
                if (start > end) { return null; }
                let mid = Math.floor((start+end)/2);
                let node = new Node(sortedArray[mid]);
                node.left = buildTreeFromUnique(sortedArray, start, mid - 1);
                node.right = buildTreeFromUnique(sortedArray, mid+1, end);
                //console.log(node);
                return node;
            }
            let arr = JSON.parse(JSON.stringify(Array.prototype.slice.call(inputArray)));
            console.log(arr)
            arr.sort();
            arr = arr.filter((item, index) => {return arr.indexOf(item) === index});
            //arr = JSON.parse(JSON.stringify(arr.filter((item, index) => {return arr.indexOf(item) === index})));
            console.log(arr)
            this.root = buildTreeFromUnique(arr, 0, arr.length-1);
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
            console.log("inserting: " + node.value + " to " + this.root);
            let nodeParent = null;
            let pointer = this.root;
            //let pointer = deepCopy(this.root);
            //prettyPrint(pointer);
            while (pointer != null)
            {
                nodeParent = pointer;
                if (node.value < pointer.value) { pointer = pointer.left; }
                else if (node.value > pointer.value) {pointer = pointer.right;}
                else if (node.value == pointer.value) { return; }
            }
            console.log(nodeParent);
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
            
        }
        this.find = function (value) {
            let pointer = this.root;
            while (pointer != null)
            {
                console.log(pointer);
                if (value > pointer.value) { pointer = pointer.right; }
                else if (value < pointer.value) { pointer = pointer.left; }
                else {
                    console.log("found: " + value);
                    return pointer;
                }
            }
            return null;
        }
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
        }
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
        }
        this.preTraverse = function (node, func) {
            if (node != null) {
                func(node);
                this.preTraverse(node.left, func);
                this.preTraverse(node.right, func);
            }
        }
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
        }
        this.postTraverse = function (node, func) {
            if (node != null) {
                this.postTraverse(node.left, func);
                this.postTraverse(node.right, func);
                func(node);
            }
        }
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
        }
        this.height = function (node) {
            if (node == null)
            {
                return 0
            }
            return Math.max(1 + this.height(node.left), 1 + this.height(node.right));
        }
    }
}

const Driver = (() => {
    function randomArray(length) {
        arr = []
        for (let i = 0; i < length; i++)
        {
            arr.push(Math.floor((Math.random()* 11)));
        }
        return arr;
    }
    const input = [1,2,3,4,5,6,7,8,9];
    console.log(input);
    const bst = new Tree();
    bst.buildTree(input);
    bst.prettyPrint(bst.root);
    console.log(bst.find(4));
    console.log(bst.root);
    bst.insert(1124);
    bst.prettyPrint(bst.root);
    console.log(bst.root);
    console.log(bst.find(4));
    console.log("level-order");
    console.log(bst.root);
    bst.levelOrder((node)=>{console.log(node);});
    console.log(bst.levelOrder());
    console.log("in-order");
    console.log(bst.root);
    bst.inOrder((node)=>{console.log(node);});
    console.log(bst.inOrder());
    console.log("pre-order");
    console.log(bst.root);
    bst.preOrder((node)=>{console.log(node);});
    console.log(bst.preOrder());
    console.log("post-order");
    console.log(bst.root);
    bst.postOrder((node)=>{console.log(node);});
    console.log(bst.postOrder());
    console.log(bst.height(bst.root));
})();