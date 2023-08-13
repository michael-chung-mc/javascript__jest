function isPalindrome (text) {
    return text === text.split('').reverse().join('');
}

module.exports = isPalindrome;