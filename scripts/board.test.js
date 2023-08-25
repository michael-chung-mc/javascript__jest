const boardFactory = require('./board.js')

describe('canary', ()=> {
    it('test testing environment', ()=>{
        expect(true).toBe(true);
    });
});

describe('a board should', ()=> {
    const gb = boardFactory(10,10);
    it('not let things go past bounds < 0', ()=>{
        expect (gb.validateCell(-1,-1)).toBe(false);
    })
    it('not let things go past bounds > chess board length', ()=>{
        expect (gb.validateCell(101,10)).toBe(false);
    })
});