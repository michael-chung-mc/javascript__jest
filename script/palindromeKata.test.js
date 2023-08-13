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
    it("false for dad mom", ()=>{
        expect(isPalindrome("dad mom")).toBe(false);
    });
    it.todo("true for whitespace");
    it.todo("error for empty string");
    it.todo("error for not a string");
})