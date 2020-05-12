'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReplySchema extends Schema {
  up () {
    this.create('replies', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.text('description').notNullable()
      table
		.integer('problem_id')
		.unsigned()
		.references('id')
		.inTable('problem')
		.onUpdate('CASCADE')
		.onDelete('CASCADE')      
      table.timestamps()
    })
  }

  down () {
    this.drop('replies')
  }
}

module.exports = ReplySchema
