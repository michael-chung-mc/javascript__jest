const temp = require('./temperatureKata.js');

describe("canary", ()=>{
    it("test testing env",()=>{
        expect(true).toBe(true);
    });
});

describe("test", ()=>{
    it("return 0 for 32",()=>{
        expect(temp(32)).toBe(0);
    });
    it.todo("return 10 for 50");
    it.todo("return 100 for 212");
    it.todo("return -40 for -40");
    it.todo("return -273.15 for -459.67");
});