const capitalize = require('./capitalize');
test('hello capitalized to Hello', () => {
    expect(capitalize("hello")).toBe("Hello");
});
test('hello World capitalized to Hello World', () => {
    expect(capitalize("hello World")).toBe("Hello World");
});
test('1 hello World capitalized to 1 hello World', () => {
    expect(capitalize("1 hello World")).toBe("1 hello World");
});
test('"" capitalized to ""', () => {
    expect(capitalize("")).toBe("");
});
test('" "capitalized to " "', () => {
    expect(capitalize(" ")).toBe(" ");
});
test('-hello capitalized to  -hello', () => {
    expect(capitalize("-hello")).toBe("-hello");
});