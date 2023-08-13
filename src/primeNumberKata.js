function findPrimeNumbers(number) {
    let factors = [];
    if (number > 1) {
        while (number%2 === 0) {
            factors.push(2);
            number /= 2;
        }
        if (number > 1) factors.push(number);
    }
    return factors;
}

module.exports = findPrimeNumbers;