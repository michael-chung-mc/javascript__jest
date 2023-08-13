const temp = require('./temperatureKata.js');

describe("canary", ()=>{
    it("test testing env",()=>{
        expect(true).toBe(true);
    });
});

describe("test", ()=>{
    test.todo("return 0 for 32");
    test.todo("return 10 for 50");
    test.todo("return 100 for 212");
    test.todo("return -40 for -40");
    test.todo("return -273.15 for -459.67");
});