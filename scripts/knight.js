const gameBoardFactory = require('./gameBoard.js')
const edge = require('./edge.js');

function Vertex(x,y) {
    this.x = x;
    this.y = y;
    this.getX = function () { return this.x; }
    this.getY = function () { return this.y; }
    this.getPosition = function () { return [this.x,this.y]; }
}

function knightFactory () {
    let knight = {
        moves : new Map(),
        world : gameBoardFactory(),
        clearMoves : function () { this.moves = new Map(); },
        addMove : function (start,end)
        {
            //console.log(`${[start, end]}`);
            this.moves[start] = new edge(start,end,1);
        },
        getMoves : function (x,y) {
            console.log('get-moves');
            let start = new Vertex(x,y);
            let q = [start];
            while (q.length > 0)
            {
                visit = q.pop();
                //console.log(`get moves: ${visit}`);
                let rightOne = visit.x+1;
                let rightTwo = visit.x+2;
                let leftOne = visit.x-1;
                let leftTwo = visit.x-2;
                let upOne = visit.y-1;
                let upTwo = visit.y-2;
                let downOne = visit.y+1;
                let downTwo = visit.y+2;
                if (this.world.validateCell(rightOne, downTwo)) {
                    let step = new Vertex(rightOne, downTwo);
                    this.addMove(visit, step);
                    if (!step in this.moves.keys()) { q.push(step); }
                }
                if (this.world.validateCell(rightOne, upTwo)) {
                    let step = new Vertex(rightOne, upTwo)
                    this.addMove(visit, step);
                    if (!step in this.moves.keys()) { q.push(step); }
                }
                if (this.world.validateCell(rightTwo, downOne)) {
                    let step = new Vertex(rightTwo, downOne)
                    this.addMove(visit, step);
                    if (!step in this.moves.keys()) { q.push(step); }
                }
                if (this.world.validateCell(rightTwo, upOne)) {
                    let step = new Vertex(rightTwo, upOne);
                    this.addMove(visit, step);
                    if (!step in this.moves.keys()) { q.push(step); }
                }
                if (this.world.validateCell(leftOne, downTwo)) {
                    let step = new Vertex(leftOne, downTwo);
                    this.addMove(visit, step);
                    if (!step in this.moves.keys()) { q.push(step); }
                }
                if (this.world.validateCell(leftOne, upTwo)) {
                    let step = new Vertex(leftOne, upTwo);
                    this.addMove(visit, step);
                    if (!step in this.moves.keys()) { q.push(step); }
                }
                if (this.world.validateCell(leftTwo, downOne)) {
                    let step = new Vertex(leftTwo, downOne)
                    this.addMove(visit, step);
                    if (!step in this.moves.keys()) { q.push(step); }
                }
                if (this.world.validateCell(leftTwo, upOne)) {
                    let step = new Vertex(leftTwo, upOne);
                    this.addMove(visit, step);
                    if (!step in this.moves.keys()) { q.push(step); }
                }
            }
            return this.moves;
        },
    }
    return knight
}

module.exports = knightFactory;