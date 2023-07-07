class Node
{
    constructor(value)
    {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}
// function NodeFactory (value) {
//     return {
//         data: value,
//         left: null,
//         right: null,
//     }
// }
const Tree = (() => {
    let root = null;
    function prettyPrint(node) {
    //  console.log(node);
    //     if (node == null) { return; };
    //     console.log(node.data);
    //     console.log(node.data + " r:" + prettyPrint(node.right));
    //     console.log(node.data + " l:" + prettyPrint(node.left));
        let flat = ""
        let q = [];
        q.push(node);
        while (q.length > 0){
            inspect = q.pop();
            if (inspect != null && inspect.data != undefined)
            {
                flat += inspect.data;
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
    function deepCopy (parent) {
        if (parent == null) { return null; }
        let node = new Node(parent.data);
        //console.log("deep copy" + parent.data);
        node.left = deepCopy(parent.left);
        node.right = deepCopy(parent.right);
        //console.log(node);
        return node;
    };
    function buildTree (inputArray) {
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
    //         //console.log("n:"+node.data);
    //         //left = arr.slice(0,mid);
    //         //right = arr.slice(mid+1, arr.length);
    //         //left = JSON.parse(JSON.stringify(arr.slice(0,mid)))
    //         //right = JSON.parse(JSON.stringify(arr.slice(mid+1, arr.length)))
    //         //console.log(left);
    //         //console.log(right);
    //         //node.left = buildTreeFromUnique(left);
    //         //node.left = buildTreeFromUnique(arr.slice(0,mid));
    //         node.left = buildTreeFromUnique(JSON.parse(JSON.stringify(sortedArray.slice(0,mid))));
    //         //console.log(node.left==null ? "" : "l:"+ node.left.data);
    //         //console.log(node.left.data)
    //         //node.right = buildTreeFromUnique(right);
    //         //node.right = buildTreeFromUnique(arr.slice(mid+1, arr.length));
    //         node.right = buildTreeFromUnique(JSON.parse(JSON.stringify(sortedArray.slice(mid+1, sortedArray.length))));
    //         //console.log(node.left==null ? "" : "r:"+ node.right.data);
    //         //console.log(node.right.data)
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
    function insertNode (node) {
        console.log("inserting: " + node.data + " to " + this.root);
        let nodeParent = null;
        let pointer = this.root;
        //let pointer = deepCopy(this.root);
        //prettyPrint(pointer);
        while (pointer != null)
        {
            nodeParent = pointer;
            if (node.data < pointer.data) { pointer = pointer.left; }
            else if (node.data > pointer.data) {pointer = pointer.right;}
            else if (node.data == pointer.data) { return; }
        }
        console.log(nodeParent);
        if (nodeParent == null) {
            let oldRoot = this.root;
            if (node.data < oldRoot.data) {node.right = oldRoot; }
            else {node.left = oldRoot; }
            this.root = node;
        }
        else if (node.data < nodeParent.data) {nodeParent.left = node; }
        else {nodeParent.right = node; }
    };
    function insertValue (value) {
        this.insertNode(new Node(value));
    };
    return {
        root,
        prettyPrint,
        buildTree,
        insertNode,
        insertValue
    }
})

const Driver = (() => {
    function randomArray(length) {
        arr = []
        for (let i = 0; i < length; i++)
        {
            arr += Math.floor((Math.random()* 11));
        }
        return arr;
    }
    const bst = Tree();
    bst.buildTree(randomArray(10));
    bst.prettyPrint(bst.root);
    console.log(bst.root);
    bst.insertValue(1124);
    bst.prettyPrint(bst.root);
    console.log(bst.root);
})();