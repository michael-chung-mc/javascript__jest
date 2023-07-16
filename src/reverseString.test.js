const reverseString = require('./reverseString');
test('olleh reversed to be hello', () => {
    expect(reverseString("olleh")).toBe("hello");
})
test('4321 reversed to be 1234', () => {
    expect(reverseString("4321")).toBe("1234");
})
test('h reversed to be h', () => {
    expect(reverseString("h")).toBe("h");
})
test('"" reversed to be ""', () => {
    expect(reverseString("")).toBe("");
})
test('" " reversed to be " "', () => {
    expect(reverseString(" ")).toBe(" ");
})