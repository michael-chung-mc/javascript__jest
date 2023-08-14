const knight = require('./knight.js');




function Dijkstra (adjList, start) {
    this.graph = adjList;
    this.src = start;
    // find key corresponding to minimum distance of non visited
    this.minimumDistance = function (distance, previous) {
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
    }
    // 
    this.search = function (adjList, start) {
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
    }
}

function knightMoves (start, end) {
    console.log('in-knightmoves');
    let k = new knight();
    let q = k.getMoves(start[0],start[1],end);
    console.log(q);
    let d = new Dijkstra(q, start);
    console.log(d.search(q,start));
};

knightMoves([3,3],[4,3]);