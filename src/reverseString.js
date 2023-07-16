function reverseString (word) {
    reversed = "";
    for (let i = word.length-1; i > -1; i--)
    {
        reversed += word.charAt(i);
    }
    return reversed;
}
module.exports = reverseString;