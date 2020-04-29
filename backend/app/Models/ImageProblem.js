'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImageProblem extends Model {
	problem () {
		return this.belongsTo('App/Models/Problem')
	}
}

module.exports = ImageProblem
