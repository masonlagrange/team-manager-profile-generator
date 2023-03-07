const employee = require('../../lib/Employee.js')

describe('Employee', () => {
    const Employee =  new employee('Mike', 4, 'Mike@gmail.com')
    describe('getName', () => {
        it('should return the employees name', () => {
            const result = Employee.getName()

            expect(result).toEqual('Mike')
        })
    })
    describe('getId', () => {
        it('should return the employees ID', () => {
            const result = Employee.getId()

            expect(result).toEqual(4)
        })
    })
    describe('getEmail', () => {
        it('should return the employees Email', () => {
            const result = Employee.getEmail()

            expect(result).toEqual('Mike@gmail.com')
        })
    })
    describe('getRole', () => {
        it('should return the employees role', () => {
            const result = Employee.getRole()

            expect(result).toEqual('Employee')
        })
    })
})