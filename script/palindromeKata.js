function isPalindrome (phrase) {
    if (phrase === "") throw new Error("Empty Input");
    if (phrase.trim() === '') return false;
    return phrase === phrase.split('').reverse().join('');
}

module.exports = isPalindrome;