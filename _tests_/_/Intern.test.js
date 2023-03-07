const Intern = require('../../lib/Intern.js')

describe('Intern', () => {
    const intern =  new Intern('Mike', 4, 'Mike@gmail.com', 'UofT')
    describe('getName', () => {
        it('should return the employees name', () => {
            const result = intern.getName()

            expect(result).toEqual('Mike')
        })
    })
    describe('getId', () => {
        it('should return the employees ID', () => {
            const result = intern.getId()

            expect(result).toEqual(4)
        })
    })
    describe('getEmail', () => {
        it('should return the employees Email', () => {
            const result = intern.getEmail()

            expect(result).toEqual('Mike@gmail.com')
        })
    })
    describe('getRole', () => {
        it('should return the employees role', () => {
            const result = intern.getRole()

            expect(result).toEqual('Intern')
        })
    })
    describe('getGithub', () => {
        it('should return the employees school', () => {
            const result = intern.getSchool()

            expect(result).toEqual('UofT')
        })
    })
})