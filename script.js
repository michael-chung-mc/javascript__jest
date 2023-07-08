const Main = (() => {
    function getRandom(bound) {
        return Math.floor((Math.random()* bound));
    };
    function fibs (length) {
        let arr = [0];
        if (length == 1) { return arr; }
        arr.push(1);
        if (length == 2) { return arr; }
        for (let i = arr.length-1; i < length-1; i++)
        {
            arr.push(arr[i] + arr[i-1]);
        }
        return arr;
    }
    function fibsRec (length) {
        if (length < 0) {return;}
        else if (length == 1) { return 0; }
        else if (length == 2) { return 1; }
        return fibsRec(length-2) + fibsRec(length-1);
    };
    function fibsRecArr(length) {
        let arr = []
        for (let i = 0; i < length; i++)
        {
            arr.push(fibsRec(length));
        }
        return arr;
    }
    let input = getRandom(11);
    input = 3;
    console.log(input);
    console.log(fibs(input))
    console.log(fibsRecArr(input))
})();
