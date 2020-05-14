'use strict'

const Problem = use('App/Models/Problem')

class ProblemController {
    async index({ request }) {
		const { latitude , longitude } = request.all()
        const problems = await Problem.query()
		  .nearBy(latitude, longitude, 10)
		  .fetch()
        return problems
    }
    
    async show({ params }) {
		const { id } = params
		const problem = await Problem.findOrFail(id)
		return problem		
	}
	
	async store({ auth, request, response }){
		const { id } = auth.user
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
}

module.exports = ProblemController
