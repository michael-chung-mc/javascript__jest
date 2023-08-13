const stackFactory = require('./stackKata.js')

describe("canary", ()=> {
    it("test testing env", ()=> {
        expect(true).toBe(true);
    });
});

describe("a stack", ()=>{
    let testStack = stackFactory();
    it("starts empty", ()=>{
        expect(testStack.isEmpty()).toBe(true);
    });
    it("starts with stack size of 0", ()=>{
        expect(testStack.size()).toBe(0);
    });
    it("is not empty when pushed", ()=>{
        testStack = stackFactory();
        testStack.push();
        expect(testStack.isEmpty()).toBe(false);
    });
    it("stack size is 1 when pushed", ()=>{
        testStack = stackFactory();
        testStack.push();
        expect(testStack.size()).toBe(1);
    });
    it("stack is empty when pushed and popped", ()=>{
        testStack = stackFactory();
        testStack.push();
        testStack.pop();
        expect(testStack.isEmpty()).toBe(true);
    });
    it("stack size is 0 when pushed and popped", ()=>{
        testStack = stackFactory();
        testStack.push();
        testStack.pop();
        expect(testStack.size()).toBe(0);
    });
    it("throws overflow error when pushing to a stack at full capacity", ()=>{
        testStack = stackFactory();
        testStack.push();
        testStack.push();
        expect(()=>{testStack.push()}).toThrowError("Past Capacity");
    });
    it("throws underflow error when popping an empty stack", ()=>{
        testStack = stackFactory();
        expect(()=>{testStack.pop()}).toThrowError("Empty Can't Pop");
    });
    it.todo("pops the same one item when pushed");
    it.todo("pops two items with the most recent first");
    it.todo("accepts only a positive capacity");
});