const sum = require('./sum')

test('Adds 1 + 2 equal 3', () => {
    expect(sum(1,2)).toEqual(3)
    // expect(sum(1,2)).toEqual(4) - test will fail 
})