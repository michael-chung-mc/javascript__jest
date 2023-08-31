const dijkstra = require('./dijkstra.js');
const graph = require('./graph.js');

describe("canary", ()=> {
    it("test testing env", () => {
        expect(true).toBe(true);
    })
});

describe ("dijkstra", ()=> {
    const d = dijkstra();
    const g = graph();
    it("dijkstra should", ()=> {
        g.insert(1,2);
        expect(d.dijkstraLinear(g,1)).toBeDefined;
    })
    it("dijkstra should", ()=> {
        g.insert(2,3);
        expect(d.dijkstraLinear(g,1)).toBeDefined;
    })
    it("dijkstra should", ()=> {
        g.insert(2,6);
        expect(d.dijkstraLinear(g,1)).toBeDefined;
    })
    it("dijkstra should", ()=> {
        g.insert(3,4);
        expect(d.dijkstraLinear(g,1)).toBeDefined;
    })
    it("dijkstra should", ()=> {
        g.insert(3,5);
        expect(d.dijkstraLinear(g,1)).toBeDefined;
    })
    it("dijkstra should", ()=> {
        g.insert(5,6);
        expect(d.dijkstraLinear(g,1)).toBeDefined;
    })
})