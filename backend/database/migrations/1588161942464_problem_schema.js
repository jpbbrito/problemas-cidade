'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProblemSchema extends Schema {
  up () {
    this.create('problems', (table) => {
      table.increments()
      table.text('description').notNullable()
      table.string('address',250)
	  table.string('tag', 30).notNullable()
	  table.decimal('latitude', 9, 6).notNullable()
	  table.decimal('longitude', 9,6).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('problems')
  }
}

module.exports = ProblemSchema
