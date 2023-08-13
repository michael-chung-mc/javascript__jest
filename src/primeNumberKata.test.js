const primeNumber = require('./primeNumberKata.js')

describe("canary", ()=> {
    it("test testing environment", ()=> {
        expect(true).toBe(true);
    })
})

describe("prime number function should", ()=> {
    it("return none for 1", ()=>{
        expect(primeNumber(1)).toEqual([]);
    });
    it("return [2] for 2", ()=>{
        expect(primeNumber(2)).toEqual([2]);
    });
    it("return [3] for 3", ()=>{
        expect(primeNumber(3)).toEqual([3]);
    });
    it("return [2, 2] for 4", ()=>{
        expect(primeNumber(4)).toEqual([2,2]);
    });
    it("return [5] for 5", ()=>{
        expect(primeNumber(5)).toEqual([5]);
    });
    it("return [2,3] for 6", ()=>{
        expect(primeNumber(6)).toEqual([2,3]);
    });
    it("return [7] for 7", ()=>{
        expect(primeNumber(6)).toEqual([2,3]);
    });
    it("return [2,2,2] for 8", ()=>{
        expect(primeNumber(8)).toEqual([2,2,2]);
    });
    it("return [3,3] for 9", ()=>{
        expect(primeNumber(9)).toEqual([3,3]);
    });
})