function vertex(x,y) {
    this.x = x;
    this.y = y;
    this.vertices = null;
    this.addNeighbor = function (x,y) {
        if (this.vertices == null)
        {
            this.vertices = [vertex(x,y)];
        }
        else
        {
            this.vertices.push(vertex(x,y));
        }
    }
}
function board () {
    this.getValidCell = function (x,y) {
        return ((x >= 0 && x < 9 && y >= 0 && y < 9))
    }
}
function knight (x,y) {
    this.board = board();
    this.pos = vertex(x,y)
    this.setPosition = function (x,y) {
        this.pos = vertex(x,y)
    }
    this.getMoves = function (x,y) {
        let move = vertex(x,y);
        if (board.getValidCell(x+1, y+2)) move.addNeighbot(x+1, y+2);
        if (board.getValidCell(x+1, y-2)) move.addNeighbot(x+1, y-2);
        if (board.getValidCell(x+2, y+1)) move.addNeighbot(x+2, y+1);
        if (board.getValidCell(x+2, y-1)) move.addNeighbot(x+2, y-1);
        if (board.getValidCell(x-1, y+2)) move.addNeighbot(x-1, y+2);
        if (board.getValidCell(x-1, y-2)) move.addNeighbot(x-1, y-2);
        if (board.getValidCell(x-2, y+1)) move.addNeighbot(x-2, y+1);
        if (board.getValidCell(x-2, y-1)) move.addNeighbot(x-2, y-1);
        return move;
    }
}

function knightMoves (start, end) {
    let sx = start[0];
    let sy = start[1];
    let ex = end[0];
    let ey = end[1];
    let k = knight(sx,sy);
    k.getMoves(knight.pos.x,knight.pos.y);
};

knightMoves();