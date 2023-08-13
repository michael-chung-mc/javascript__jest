function findPrimeNumbers(number) {
    let factors = [];
    if (number > 1) {
<<<<<<< HEAD
        while (number%2 === 0) {
            factors.push(2);
            number /= 2;
=======
        for (let divisor = 2; number > 1; divisor += 1) {
            while (number%divisor===0)
            {
                factors.push(divisor);
                number/=divisor;
            }
>>>>>>> aa5068c (SET prime number return [3,3] for 9)
        }
        if (number > 1) factors.push(number);
    }
    return factors;
}

module.exports = findPrimeNumbers;