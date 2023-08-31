function nodeFactory (value = 0, weight = 0, next = null) {
    const node = {
        value : value,
        next : next,
    };
    return node;
}

module.exports = nodeFactory;