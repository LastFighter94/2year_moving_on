const reverseString = require('./reversestring')

describe('Reverse String', () => {
    it('should be a function', () => {
        expect(typeof reverseString).toEqual('function')
    })

    it('should return a string', () => {
        expect(typeof reverseString('hello')).toEqual('string')
    })

    it('should return reversed string', () => {
        expect(reverseString('Hello')).toEqual('olleH')
        expect(reverseString('test')).toEqual('tset')
        expect(reverseString('where')).toEqual('erehw')
    })
})