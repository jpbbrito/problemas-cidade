'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reply extends Model {
	user () {
		return this.belongsTo('App/Models/User')
	}
	image_replies () {
		return this.hasMany('App/Models/ImageReply')
	}
	
}

module.exports = Reply
