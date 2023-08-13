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
    it("true for whitespace", ()=>{
        expect(isPalindrome("    ")).toBe(false);
    });
    it("error for empty string", ()=>{
        expect(()=>{isPalindrome("")}).toThrowError("Empty Input");
    });
    it("error for not a string", ()=>{
        expect(()=>{isPalindrome(121)}).toThrowError("NonString Input");
    });
})