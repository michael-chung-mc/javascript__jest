function dijkstraFactory () {
    function dijkstraLinear (g, start) {
        let distance = new Map();
        let previous = new Map();
        let vertices = g.getVertices();
        console.log(JSON.stringify(vertices));
        for (let i = 0; i < vertices.length; i++ )
        {
            distance.set(vertices[i],Infinity);
            previous.set(vertices[i],false);
        }
        distance.set(start,0);
        for (let i = 0; i < vertices.length; i++)
        {
            let min = -1;
            for (const vertex of distance.keys())
            {
                if (previous[vertex]==false && (min==-1 || distance[vertex]<distance[min]))
                {
                    min = vertex;
                }
            }
            //if (min == Infinity) {break;}
            //previous[min] = true;
            let edges = g.getEdges();
            for (let j = 0; j < edges.length; j++)
            {
                if (!previous[min] && distance[edges[j].start]>distance[min]+g.getWeight(edges[j].start,edges[j].end))
                {
                    distance.set(edges[j].start, distance[min] + g.getWeight(edges[j].start,edges[j].end));
                    previous.set(min,true);
                }
            }
        }
        console.log(distance);
        return distance;
    }
    return {dijkstraLinear,}
}

module.exports = dijkstraFactory;