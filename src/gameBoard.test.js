const gameBoardFactory = require('./gameBoard.js')

describe('canary', ()=> {
    it('test testing environment', ()=>{
        expect(true).toBe(true);
    });
});

describe('a gameboard should', ()=> {
    const gb = gameBoardFactory();
    it('not let things go past bounds < 0', ()=>{
        expect (gb.validateCell(-1,-1)).toBe(false);
    })
    it('not let things go past bounds > chess board length', ()=>{
        expect (gb.validateCell(101,10)).toBe(false);
    })
});