const node = require('./node.js');
const edge = require('./edge.js');

function graphFactory () {
    let edges = new Set();
    let weights = new Map();
    let edgesList = new Set();
    function insert (start,end,weight) {
        let w = weight;
        let isInserted = false;
        if (weight == null) { w = 1; }
        for (let i = 0; i < edges; i ++)
        {
            if (edges[i].value == start)
            {
                let ptr = edges[i];
                while (ptr.next != null)
                {
                    ptr = ptr.next;
                }
                ptr.next = end;
                isInserted = true;
            }
        }
        if (!isInserted)
        {
            let head = node(start);
            let tail = node(end);
            head.next = tail;
            edgesList.add(head);
        }
        weights.set(w,"");
        edges.set(edge(start, end, weight));
    }
    const graph = {
        insert,
    };
    return graph;
}

module.exports = graphFactory;