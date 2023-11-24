// solution 1
// function reverseString(string){
//     return string.split('').reverse().join('')
// }

// solution 2
// function reverseString(string){
//     let reversed = ''

//     for (let char of string){
//         reversed = char + reversed
//     }

//     return reversed
// }

// solution 3
function reverseString(string){
    return string.split('').reduce((reverse, char) => char + reverse, '')
}

module.exports = reverseString