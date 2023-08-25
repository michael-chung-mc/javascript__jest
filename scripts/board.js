function boardFactory (maxWidth, maxHeight) {
    let width = maxWidth;
    let height = maxHeight;

    function validateCell (x,y) {
        return (x >= 0 && x < width && y >= 0 && y < height);
    }
    return {validateCell};
}

module.exports = boardFactory;