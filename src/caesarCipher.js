function caesarCipher (word, factor) {
    let shifted = ""
    for (let i = 0; i < word.length; i++)
    {
        let letter = word[i];
        if (letter.match(/^[a-z]+$/i))
        {
            let index = letter.charCodeAt(0)
            let start = letter == letter.toLowerCase() ? "a".charCodeAt(0): "A".charCodeAt(0);
            let limit = start + 26;
            let shiftedIndex = index + factor;
            if (shiftedIndex >= limit)
            {
                shiftedIndex = ((shiftedIndex - start)% 26) + start;
            }
            shifted += String.fromCharCode(shiftedIndex);
        }
        else
        {
            shifted += letter;
        }
    }
    return shifted;
};

module.exports = caesarCipher;