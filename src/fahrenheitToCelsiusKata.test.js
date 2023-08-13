const fToC = require('./fahrenheitToCelsiusKata.js');

describe("canary", ()=>{
    it("test testing env",()=>{
        expect(true).toBe(true);
    });
});

describe("fahrenheitToCelsius should", ()=>{
    it("return 0 for 32",()=>{
        expect(fToC(32)).toBe(0);
    });
    it("return 10 for 50",()=>{
        expect(fToC(50)).toBe(10);
    });
    it("return 100 for 212",()=>{
        expect(fToC(212)).toBe(100);
    });
    it("return -40 for -40",()=>{
        expect(fToC(-40)).toBe(-40);
    });
    it("return -273.15 for -459.67",()=>{
        expect(fToC(-459.67)).toBe(-273.15);
    });
});