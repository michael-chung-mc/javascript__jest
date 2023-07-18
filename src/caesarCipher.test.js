const caesarCipher = require('./caesarCipher')

test ('z,1 toBe a',()=> {
    expect(caesarCipher("z",1)).toBe("a")
});
test ('1232131321,1 toBe 1232131321',()=> {
    expect(caesarCipher("1232131321",1)).toBe("1232131321")
});
test ('abc,1 toBe bcd',()=> {
    expect(caesarCipher("abc",1)).toBe("bcd")
});
test ('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG,3 toBe WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ',()=> {
    expect(caesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",3)).toBe("WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ")
});
test ('abcdefghijklmnopqrstuvwxyz,1 toBe bcdefghijklmnopqrstuvwxyza',()=> {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz",1)).toBe("bcdefghijklmnopqrstuvwxyza")
});
test ('abcdefghijklmnopqrstuvwxyz,7 toBe hijklmnopqrstuvwxyzabcdefg',()=> {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz",7)).toBe("hijklmnopqrstuvwxyzabcdefg")
});
test ('abcdefghijklmnopqrstuvwxyz,68 toBe qrstuvwxyzabcdefghijklmnop',()=> {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz",68)).toBe("qrstuvwxyzabcdefghijklmnop")
});