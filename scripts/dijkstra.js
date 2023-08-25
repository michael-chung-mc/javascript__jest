// find key corresponding to minimum distance of non visited
function minimumDistance (distance, previous) {
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
    return minKey;
}

function dijkstra (adjList, start) {
    let distance = new Map();
    let previous = new Map();
    for (let i = 0; i < adjList.keys().length; i++)
    {
        distance[adjList[i]] = Infinity;
        previous[adjList[i]] = false;
    }
    distance[start] = 0
    for (key in adjList.keys())
    {
        for (let j = 0; j < adjList[key].length; j++)
        {
            let min = minimumDistance(distance, previous);
            if (!previous[min] && distance[i]>distance[min])
            {
                distance[i] = distance[min] + 1;
                previous[min] = true;
            }
        }
    }
    return distance;
}

module.exports = dijkstra;