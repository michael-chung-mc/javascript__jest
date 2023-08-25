function edgeFactory(startNode=null,endNode=null,edgeWeight=0) {
    let start = startNode;
    let end = endNode;
    let weight = edgeWeight;
    return {
        start,
        end,
        weight,
    };
}

module.exports = edgeFactory;