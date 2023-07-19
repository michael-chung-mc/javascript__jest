const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
    let arr1 = analyzeArray([1,1,1]);
    let arr2 = analyzeArray([1,1]);

    test('arr1 = [1,1,1] average toBe 1',()=>{
        expect(arr1.average).toBe(1);
    })
    test('arr1 = [1,1,1] min toBe 1',()=>{
        expect(arr1.min).toBe(1);
    })
    test('arr1 = [1,1,1] max toBe 1',()=>{
        expect(arr1.max).toBe(1);
    })
    test('arr1 = [1,1,1] length toBe 3',()=>{
        expect(arr1.length).toBe(3);
    })
    test('arr2 = [1,1] average toBe 1',()=>{
        expect(arr2.average).toBe(1);
    })
    test('arr2 = [1,1] min toBe 1',()=>{
        expect(arr2.min).toBe(1);
    })
    test('arr2 = [1,1] max toBe 1',()=>{
        expect(arr2.max).toBe(1);
    })
    test('arr2 = [1,1] length toBe 3',()=>{
        expect(arr2.length).toBe(2);
    })

})
