const nodeFactory = require('./node.js');

describe('canary', ()=> {
    it('test testing environment', ()=>{
        expect(true).toBe(true);
    });
});

describe('node', ()=> {
    let head = nodeFactory();
    let next = nodeFactory(2);
    let tail = nodeFactory(3);
    it('handles empty input', ()=>{
        expect(head).toBeDefined();
    });
    head.value = 1;
    it('can add next node', ()=>{
        head.next = next;
        expect(head.next).toBeDefined();
        expect(head.next).toStrictEqual(next);
        head.next.next = tail;
        expect(head.next.next).toBeDefined();
        expect(head.next.next).toStrictEqual(tail);
    });
    it('can delete node', ()=>{
        head.next = head.next.next;
        expect(head.next).toBeDefined();
        expect(head.next).toStrictEqual(tail);
    });
});