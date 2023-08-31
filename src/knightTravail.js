function nodeFactory (x = 0, y = 0, next = null) {
    const node = {
        x : x,
        y : y,
        parent : null,
        children : next,
    };
    return node;
}

board = [];
for (let i = 0; i < 8; i++)
{
    board.push([]);
    for (let j = 0; j < 8; j++)
    {
        board[i].push(0);
    }
}
console.log(board);

function valid (x,y) {
    return (x >= 0 && x < board.length && y >= 0 && y < board[0].length && board[x][y]== 0);
}

function knightMoves (x,y) {
    let arr = [];
    const rightOne = x+1;
    const rightTwo = x+2;
    const leftOne = x-1;
    const leftTwo = x-2;
    const upOne = y-1;
    const upTwo = y-2;
    const downOne = y+1;
    const downTwo = y+2;
    if (valid(rightTwo,upOne))
    {
        arr.push([rightTwo,upOne]);
        board[rightTwo][upOne] = 1;
    }
    if (valid(rightTwo,downOne))
    {
        arr.push([rightTwo,downOne]);
        board[rightTwo][downOne] = 1;
    }
    if (valid(rightOne,upTwo))
    {
        arr.push([rightOne,upTwo]);
        board[rightOne][upTwo] = 1;
    }
    if (valid(rightOne,downTwo))
    {
        arr.push([rightOne,downTwo]);
        board[rightOne][downTwo] = 1;
    }
    if (valid(leftTwo,downOne))
    {
        arr.push([leftTwo,downOne]);
        board[leftTwo][downOne] = 1;
    }
    if (valid(leftTwo,upOne))
    {
        arr.push([leftTwo,upOne]);
        board[leftTwo][upOne] = 1;
    }
    if (valid(leftOne,downTwo))
    {
        board[leftOne][downTwo] = 1;
        arr.push([leftOne,downTwo]);
    }
    if (valid(leftOne,upTwo))
    {
        arr.push([leftOne,upTwo]);
        board[leftOne][upTwo] = 1;
    }
    console.log(`km xy = ${x,y}`);
    console.log(`km arr = ${arr}`);
    return arr;
}
function moveTree(x,y)
{
    let tree = nodeFactory(x,y);
    let q = [tree];
    while (q.length > 0)
    {
        visit = q.pop();
        console.log(`mt visit = ${visit}`);
        if (visit.children==null)
        {
            visit.children = [];
        }
        let moves = knightMoves(visit.x,visit.y);
        for (let i = 0; i < moves.length; i++)
        {
            let move = moves[i];
            console.log('move = '+move);
            let child = nodeFactory(move[0],move[1]);
            child.parent = visit;
            visit.children.push(child);
            console.log(visit.children);
        }
        for (let i = 0; i < visit.children.length; i++)
        {
            q.push(visit.children[i]);
            console.log(q);
        }
    }
    return tree;
}

function knightTravails(startx,starty,endx,endy)
{
    let path = moveTree(startx,starty);
    let q = [path];
    let target = null;
    while (q.length > 0)
    {
        visit = q.pop();
        if (visit.x == endx && visit.y==endy)
        {
            target = visit;
            break;
        }
        for (let i = 0; i < visit.children.length; i++)
        {
            q.push(visit.children[i]);
        }
    }
    let ptr = target;
    while (ptr != null)
    {
        console.log(ptr);
        ptr=ptr.parent;
    }
}

knightTravails(3,4,4,5);