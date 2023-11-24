// solution 1
// function palindrom(str){
//     const reversed = str.split('').reverse().join('')
//     return str === reversed
// }

function palindrom(str){
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1]
    })
}

module.exports = palindrom