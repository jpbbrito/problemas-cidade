'use strict'

const Problem = use('App/Models/Problem')

class ProblemController {
    async index() {
        const problems = await Problem.all()
        return problems
    }
}

module.exports = ProblemController
