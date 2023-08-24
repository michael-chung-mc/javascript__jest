const mergesortFactory = require('./mergeSort.js');

describe("canary", ()=>{
    it("test testing env",()=>{
        expect(true).toBe(true);
    });
});

describe("mergesort should", ()=>{
    const mergesort = mergesortFactory();
    it("mergesort([1]) = [1]",()=>{
        let arr = [1]
        arr = mergesort(arr);
        expect(arr).toStrictEqual([1]);
    });
    it("mergesort([2,1]) = [1,2]",()=>{
        let arr = [2,1]
        arr = mergesort(arr);
        expect(arr).toStrictEqual([1,2]);
    });
    it("mergesort([2,3,1]) = [1,2,3]",()=>{
        let arr = [2,3,1]
        arr = mergesort(arr);
        expect(arr).toStrictEqual([1,2,3]);
    });
    it("mergesort([4,3,2,1]) = [1,2,3,4]",()=>{
        let arr = [4,3,2,1]
        arr = mergesort(arr);
        expect(arr).toStrictEqual([1,2,3,4]);
    });
    it("mergesort([5,4,3,2,1]) = [1,2,3,4,5]",()=>{
        let arr = [5,4,3,2,1]
        arr = mergesort(arr);
        expect(arr).toStrictEqual([1,2,3,4,5]);
    });
    it("mergesort([5,4,3,6,2,1]) = [1,2,3,4,5,6]",()=>{
        let arr = [5,4,3,6,2,1]
        arr = mergesort(arr);
        expect(arr).toStrictEqual([1,2,3,4,5,6]);
    });
});

