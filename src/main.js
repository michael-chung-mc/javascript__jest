const knight = require('./knight.js');
const dijkstra = require('./dijkstra.js');

function knightMoves (start, end) {
    console.log('in-knightmoves');
    let k = new knight();
    let q = k.getMoves(start[0],start[1],end);
    console.log(q);
    let d = dijkstra(q, start);
    console.log(d.search(q,start));
};

knightMoves([3,3],[4,3]);