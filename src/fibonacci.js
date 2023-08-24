function fibonacciFactory () {
    const fibonacci = {
        fibonacciIterative : function (length) {
            let arr = [];
            if (length <= 0) { return arr; }
            arr.push(0);
            if (length == 1) { return arr; }
            arr.push(1);
            if (length == 2) { return arr; }
            for (let i = arr.length-1; i < length-1; i++)
            {
                arr.push(arr[i] + arr[i-1]);
            }
            return arr;
        },
        fibonacciRecursive: function(length) {
            let arr = [];
            if (length <= 0) { return arr; }
            for (let i = 0; i < length; i++)
            {
                arr.push(this.fibonacciRecursiveHelper(i+1));
            }
            return arr;
        },
        fibonacciRecursiveHelper: function (length) {
            if (length == 1) { return 0; }
            else if (length == 2) { return 1; }
            return this.fibonacciRecursiveHelper(length-2) + this.fibonacciRecursiveHelper(length-1);
        },
    }
    return fibonacci;
}

module.exports = fibonacciFactory;