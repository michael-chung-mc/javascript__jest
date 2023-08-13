const isPalindrome = require('./palindromeKata.js')

describe("canary test", ()=>{
    it("test testing environment", ()=> {
        expect(true).toBe(true);
    });
})

describe("palindrome", ()=> {
    it("true for mom", ()=> {
        expect(isPalindrome("mom")).toBe(true);
    });
    it("false for dude", ()=> {
        expect(isPalindrome("dude")).toBe(false);
    });
    it.todo("true for mom mom");
    it.todo("false for dad mom");
    it.todo("true for whitespace");
    it.todo("error for empty string");
    it.todo("error for not a string");
})