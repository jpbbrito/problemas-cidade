'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImageReply extends Model {
	reply () {
		return this.belongsTo('App/Models/Reply')
	}
}

module.exports = ImageReply
