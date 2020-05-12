'use strict'

const Problem = use('App/Models/Problem')

class ProblemController {
    async index() {
        const problems = await Problem.all()
        return problems
    }
    
    async show({ params }) {
		const { id } = params
		console.log(id)
		const problem = await Problem.findOrFail(id)
		console.log(problem)
		return problem		
	}
}

module.exports = ProblemController
