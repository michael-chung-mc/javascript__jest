const calculator = require('./calculator');
test ("add 1,1 = 2", () => {
    expect(calculator.add(1,1)).toBe(2);
});
test ("add -1,1 = 0", () => {
    expect(calculator.add(-1,1)).toBe(0);
});
test ("subtract 2,1 = 1", () => {
    expect(calculator.subtract(2,1)).toBe(1);
});
test ("subtract 1,1 = 0", () => {
    expect(calculator.subtract(1,1)).toBe(0);
});
test ("divide 2,1 = 2", () => {
    expect(calculator.divide(2,1)).toBe(2);
});
test ("divide 0,2 = 0", () => {
    expect(calculator.divide(0,2)).toBe(0);
});
test ("divide 0,0 = 0", () => {
    expect(calculator.divide(0,2)).toBe(0);
});
test ("multiply 1,2 = 2", () => {
    expect(calculator.multiply(1,2)).toBe(2);
});
test ("multiply 0,2 = 0", () => {
    expect(calculator.multiply(0,2)).toBe(0);
});