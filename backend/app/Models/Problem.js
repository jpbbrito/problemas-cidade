'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Problem extends Model {
	image_problems () {
		return this.hasMany('App/Models/ImageProblem')
	}
}

module.exports = Problem
