const node = require('./node.js');
const edge = require('./edge.js');

function graphFactory () {
    let edges = new Set();
    let vertices = new Set();
    let weights = new Map();
    let edgesList = new Set();
    function checkEdges (start, end) {
        let inEdges = false
        for (const edge of edges.values())
        {
            if (edge.start == start && edge.end == end)
            {
                inEdges = true;
            };
        };
        ;
        return inEdges && checkEdgesList(start) && checkEdgesList(end);
    };
    function checkVertices (value) {
        let inVertices = false
        for (const vertex of vertices.values())
        {
            if (vertex == value)
            {
                inVertices = true;
            };
        };
        return inVertices && checkEdgesList(value);
    }
    function checkEdgesList (value)
    {
        for (const edge of edgesList.values())
        {
            if (edge.value == value )
            {
                return true;
            };
            let ptr = edge;
            while (ptr != null)
            {
                if (ptr.value == value)
                {
                    return true;
                }
                ptr = ptr.next;
            };
        };
        return false;
    };
    function insert (startValue,endValue,weight)
    {
        let w = weight;
        let e = edge(startValue, endValue, weight);
        let isInserted = false;
        if (weight == null) { w = 1; };
        for (const edge of edgesList.values())
        {
            if (edge.value == startValue)
            {
                let ptr = edge;
                while (ptr.next != null)
                {
                    ptr = ptr.next;
                };
                ptr.next = endValue;
                isInserted = true;
            };
        };
        if (!isInserted)
        {
            let head = node(startValue);
            let tail = node(endValue);
            head.next = tail;
            edgesList.add(head);
        };
        weights.set(e,w);
        edges.add(e);
        if (!vertices.has(startValue)) {vertices.add(startValue);};
        if (!vertices.has(endValue)) {vertices.add(endValue);};
        // console.log(edges);
        // console.log(vertices);
        // console.log(weights);
        // console.log(edgesList);
    };
    return {
        edges,
        weights,
        edgesList,
        checkEdges,
        checkVertices,
        checkEdgesList,
        insert,
    };
}

module.exports = graphFactory;