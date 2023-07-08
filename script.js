const Main = (() => {
    function getRandomArray(length,bound) {
        let arr = [];
        for (let i = 0; i < length; i++)
        {
            arr.push(Math.floor((Math.random()* bound)));
        }
        return arr;
    };
    function fibs (arr) {
        let sum = 0;
        for (let i =0; i < arr.length; i++)
        {
            sum += arr[i];
        }
        return sum;
    }
    function fibsRec (arr, start) {
        if (start >= arr.length) { return 0; }
        return arr[start] + fibsRec(arr, start + 1);
    };
    input = getRandomArray(10,11);
    console.log(input);
    console.log(fibs(input))
    console.log(fibsRec(input,0))
})();
