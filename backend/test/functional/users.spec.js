'use strict'

const { test, trait } = use('Test/Suite')('Users')

trait('Test/ApiClient')

test('make return hello world', async ({ client }) => {
  const response = await client.get('/').end()
  response.assertStatus(200) 
  response.assertJSON({msg: 'Hello World'})
  
})
