'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageProblemSchema extends Schema {
  up () {
    this.create('image_problems', (table) => {
      table.increments()
      table
        .integer('problem_id')
        .unsigned()
        .references('id')
        .inTable('problems')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('image_problems')
  }
}

module.exports = ImageProblemSchema
