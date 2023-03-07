const Engineer = require('../../lib/Engineer.js')

describe('Engineer', () => {
    const engineer =  new Engineer('Mike', 4, 'Mike@gmail.com', 'MikeGH')
    describe('getName', () => {
        it('should return the employees name', () => {
            const result = engineer.getName()

            expect(result).toEqual('Mike')
        })
    })
    describe('getId', () => {
        it('should return the employees ID', () => {
            const result = engineer.getId()

            expect(result).toEqual(4)
        })
    })
    describe('getEmail', () => {
        it('should return the employees Email', () => {
            const result = engineer.getEmail()

            expect(result).toEqual('Mike@gmail.com')
        })
    })
    describe('getRole', () => {
        it('should return the employees role', () => {
            const result = engineer.getRole()

            expect(result).toEqual('Engineer')
        })
    })
    describe('getGithub', () => {
        it('should return the employees GitHub username', () => {
            const result = engineer.getGithub()

            expect(result).toEqual('MikeGH')
        })
    })
})