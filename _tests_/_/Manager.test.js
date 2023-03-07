const Manager = require('../../lib/Manager.js')

describe('Manager', () => {
    const manager =  new Manager('Mike', 4, 'Mike@gmail.com', 23)
    describe('getName', () => {
        it('should return the employees name', () => {
            const result = manager.getName()

            expect(result).toEqual('Mike')
        })
    })
    describe('getId', () => {
        it('should return the employees ID', () => {
            const result = manager.getId()

            expect(result).toEqual(4)
        })
    })
    describe('getEmail', () => {
        it('should return the employees Email', () => {
            const result = manager.getEmail()

            expect(result).toEqual('Mike@gmail.com')
        })
    })
    describe('getRole', () => {
        it('should return the employees role', () => {
            const result = manager.getRole()

            expect(result).toEqual('Manager')
        })
    })
    describe('officeNumber', () => {
        it('should return the employees office number', () => {
            const result = manager.officeNumber

            expect(result).toEqual(23)
        })
    })
})