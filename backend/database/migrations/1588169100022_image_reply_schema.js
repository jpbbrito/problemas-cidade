'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageReplySchema extends Schema {
  up () {
    this.create('image_replies', (table) => {
      table.increments()
      table
        .integer('reply_id')
        .unsigned()
        .references('id')
        .inTable('replies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('image_replies')
  }
}

module.exports = ImageReplySchema
