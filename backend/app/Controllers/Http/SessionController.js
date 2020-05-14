'use strict'

class SessionController {
    async create ({ request, auth }) {
        const { username, password } = request.all()
        try{
            const token = await auth.attempt(username, password)
            return token
        } catch(error){
            throw new Error(error)
        }
    }     
}

module.exports = SessionController
