const graph = require('./graph.js');
const edge = require('./edge.js');

describe("canary", ()=> {
    it("test testing env", () => {
        expect(true).toBe(true);
    })
});

describe("graph", ()=> {
    g = graph();
    it("graph init", () => {
        expect(g).toBeDefined();
    })
    g.insert(1,2,2);
    e = edge(1,2,2);
    it("graph insert (1,2) weight 2", () => {
        expect(g.checkVertices(1)).toBeTruthy();
        expect(g.checkVertices(2)).toBeTruthy();
        expect(g.checkEdges(1,2)).toBeTruthy();
    })
});