function isPalindrome (phrase) {
    if (typeof phrase !== 'string') throw new Error("NonString Input");
    if (phrase === "") throw new Error("Empty Input");
    if (phrase.trim() === '') return false;
    return phrase === phrase.split('').reverse().join('');
}

module.exports = isPalindrome;