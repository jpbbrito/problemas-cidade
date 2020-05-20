'use strict'

const Problem = use('App/Models/Problem')

class ProblemController {
	
    async index({ request }) {
		const problems = await Problem.query()
		  .with('image_problems')
		  .fetch()
        return problems
    }
    
    async show({ params }) {
		const problem = await Problem.findOrFail(params.id)
		return problem		
	}
	
	async store({ request }){
		const data = request.only([
			'description',
			'address',
			'tag',
			'latitude',
			'longitude'
		])
		const problem = await Problem.create({ ...data})
		return problem		
	}

	async destroy({ params }){
		const problem = await Problem.find(params.id)
		await problem.delete()
		return problem
	}
}

module.exports = ProblemController
