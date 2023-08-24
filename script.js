const Main = (() => {
    function getRandomArray(length) {
        let arr = []
        for (let i = 0; i < length; i++)
        {
            arr.push(Math.floor((Math.random()* 11)));
        }
        return arr;
    }
    function mergeSort (arr, start, end)
    {
        if (start < 0 || end > arr.length-1 || start >= end)
        {
            return;
        }
        let i = start;
        while (i < end)
        {
            if (arr[i] > arr[end])
            {
                let temp = arr[i];
                arr[i] = arr[end];
                arr[end] = temp;
            }
            i += 1
        }
        let mid = Math.floor(end - (start + end)/2);
        console.log(start + ":" + mid + ":" + end);
        mergeSort(arr, start, mid)
        mergeSort(arr, end-mid, end)
    }
    let input = getRandomArray(11);
    console.log(input);
    console.log(mergeSort(input,0,input.length-1))
    console.log(input);
})();

