const hasDuplicateIds = require('./hasduplicateids')

describe('DOM Tree Has duplicate Ids', () => {
    let root;
    // let root, child1, child2; - если убрать let снизу
    // тесты будут работать как в примечаниях
    beforeEach(() => {
        // Create mock elements 
        root = document.createElement('div')
        let child1 = document.createElement('div')
        let child2 = document.createElement('div')

        root.appendChild(child1)
        root.appendChild(child2)
    });

    afterEach(() => {
        root = null;
    })

    it('should be a function', () => {
        expect(typeof hasDuplicateIds).toEqual('function')
    })
    it('should return a boolean', () => {
        expect(typeof hasDuplicateIds()).toEqual('boolean')
    })
    it('should return false if no root', () => {
        expect(hasDuplicateIds()).toBeFalsy()
    })
    it('should return true if there are duplicate ids', () => {
        // Add duplicate ids
        root.id = 'root'
        root.children[0].id = 'child'
        root.children[1].id = 'child'
        // child1.id = 'child'
        // child2.id = 'child'

        const result = hasDuplicateIds(root)

        expect(result).toEqual(true)
    })
    it('should return false if there are no duplicate ids', () => {
        // Add duplicate ids
        root.id = 'root'
        root.children[0].id = 'child1'
        root.children[1].id = 'child2'
        // child1.id = 'child1'
        // child2.id = 'child2'

        const result = hasDuplicateIds(root)

        expect(result).toEqual(false)
    })
})