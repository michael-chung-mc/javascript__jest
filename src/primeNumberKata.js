function findPrimeNumbers(number) {
    let factors = [];
    if (number > 1) {
        for (let divisor = 2; number > 1; divisor += 1) {
            while (number%divisor===0)
            {
                factors.push(divisor);
                number/=divisor;
            }
        }
        if (number > 1) factors.push(number);
    }
    return factors;
}

module.exports = findPrimeNumbers;