function gameBoardFactory () {
    let gameBoard = {
        validateCell : function (x,y) {
            return (x >= 0 && x < 9 && y >= 0 && y < 9);
        }
    };
    return gameBoard;
}

module.exports = gameBoardFactory;