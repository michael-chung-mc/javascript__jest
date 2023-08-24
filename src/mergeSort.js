function mergesortFactory() {
    let arr = [];
    function merge (start, mid, end)
    {
        let larr = this.arr.slice(start, mid+1);
        let rarr = this.arr.slice(mid+1, end+1);

        let i = 0;
        let j = 0;
        let k = start;
        while (i < larr.length && j < rarr.length)
        {
            if (larr[i] <= rarr[j])
            {
                this.arr[k] = larr[i];
                i+=1;
            }
            else
            {
                this.arr[k] = rarr[j];
                j+=1;
            }
            k+=1;
        }
        while (i < larr.length)
        {
            this.arr[k] = larr[i];
            i+=1;
            k+=1;
        }
        while (j < rarr.length)
        {
            this.arr[k] = rarr[j];
            j+=1;
            k+=1;
        }
        //console.log(`left=${larr} & right=${rarr} to be sorted = ${this.arr}`);
    }
    function mergesortInplace(start, end)
    {
        if (start >= end)
        {
            return;
        }
        let mid = start + Math.floor((end-start)/2);
        mergesortInplace(start, mid)
        mergesortInplace(mid+1, end)
        //console.log(`${start}-${mid}-${end} for ${this.arr}`);
        merge(start,mid,end);
    }
    function mergesort(input)
    {
        if (input==null) {return;}
        this.arr = input;
        mergesortInplace(0,input.length-1);
        //console.log(this.arr);
        return this.arr;
    };
    return mergesort;
}

module.exports = mergesortFactory;