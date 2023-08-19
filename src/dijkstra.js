function dijkstraFactory (adjList, start) {
    const dijkstra = {
        graph : adjList,
        src : start,
        // find key corresponding to minimum distance of non visited
        minimumDistance : function (distance, previous) {
            let min = Infinity;
            let minKey;
            for (key in adjList.keys())
            {
                if (previous[key]==false && distance[key]<min)
                {
                    min = distance[key];
                    minKey = key;
                }
            }
            console.log('find-min: ' + minKey);
            return minKey;
        },
        search : function (adjList, start) {
            console.log('start-search');
            let distance = new Map();
            let previous = new Map();
            for (let i = 0; i < adjList.keys().length; i++)
            {
                distance[adjList[i].start] = Infinity;
                previous[adjList[i].start] = false;
            }
            distance[start] = 0
            for (key in adjList.keys())
            {
                for (let j = 0; j < adjList[key].length; j++)
                {
                    let min = this.minimumDistance(distance, previous);
                    console.log('start-search found min: ' + min);
                    if (!previous[min] && distance[i]>distance[min])
                    {
                        distance[i] = distance[min] + 1;
                        previous[min] = true;
                    }
                }
            }
            return distance;
        },
    }
    return dijkstra;
}

module.exports = dijkstraFactory;