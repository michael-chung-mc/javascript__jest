function capitalize (word) {
    let capitalized = word.charAt(0);
    capitalized = capitalized.toUpperCase();
    capitalized = capitalized + word.slice(1,word.length)
    return capitalized;
}
module.exports = capitalize