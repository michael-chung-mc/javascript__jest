function analyzeArray(nums)
{
    let sum = 0;
    for (const n of nums) { sum += n; };
    let minimum = Infinity;
    for (const n of nums) { minimum = Math.min(n, minimum); }
    let maximum = -Infinity;
    for (const n of nums) { maximum = Math.max(n, maximum); }
    
    let obj = {}
    obj.average = sum/nums.length;
    obj.min = minimum;
    obj.max = maximum;
    obj.length = nums.length;
    return obj;
}

module.exports = analyzeArray;