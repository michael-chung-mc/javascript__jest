const fibonacciFactory = require('./fibonacci.js');

describe("canary", ()=>{
    it("test testing env",()=>{
        expect(true).toBe(true);
    });
});

describe("fibonacci should", ()=>{
    const fibonacci = fibonacciFactory();
    let ifibo0 = fibonacci.fibonacciIterative(0);
    let rfibo0 = fibonacci.fibonacciRecursive(0);
    let ifibo1 = fibonacci.fibonacciIterative(1);
    let rfibo1 = fibonacci.fibonacciRecursive(1);
    let ifibo2 = fibonacci.fibonacciIterative(2);
    let rfibo2 = fibonacci.fibonacciRecursive(2);
    let ifibo3 = fibonacci.fibonacciIterative(3);
    let rfibo3 = fibonacci.fibonacciRecursive(3);
    let ifibo4 = fibonacci.fibonacciIterative(4);
    let rfibo4 = fibonacci.fibonacciRecursive(4);
    it("fibo(0) = []",()=>{
        expect(ifibo0).toStrictEqual([]);
        expect(rfibo0).toStrictEqual([]);
        expect(ifibo0).toStrictEqual(rfibo0);
    });
    it("fibo(1) = [0]",()=>{
        expect(ifibo1).toStrictEqual([0]);
        expect(rfibo1).toStrictEqual([0]);
        expect(ifibo1).toStrictEqual(rfibo1);
    });
    it("fibo(2) = [0,1]",()=>{
        expect(ifibo2).toStrictEqual([0,1]);
        expect(rfibo2).toStrictEqual([0,1]);
        expect(ifibo2).toStrictEqual(rfibo2);
    });
    it("fibo(3) = [0,1,1]",()=>{
        expect(ifibo3).toStrictEqual([0,1,1]);
        expect(rfibo3).toStrictEqual([0,1,1]);
        expect(ifibo3).toStrictEqual(rfibo3);
    });
    it("fibo(4) = [0,1,1,2]",()=>{
        expect(ifibo4).toStrictEqual([0,1,1,2]);
        expect(rfibo4).toStrictEqual([0,1,1,2]);
        expect(ifibo4).toStrictEqual(rfibo4);
    });
});