'use strict'

const { trait, test } = use('Test/Suite')('Problem')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')

const userTest = {username: 'test', email: 'test@test.com', password:'test123'}

test('get token', async ({ client }) => {
	await User.create(userTest)
	const response = await client
	  .post('/session')
      .send(userTest)
      .end()
	userTest.auth = JSON.parse(response.text)
	response.assertStatus(200)
	response.assertJSONSubset({"type":"bearer"})
})

test('create problem', async ({ client}) => {
	const response = await client
	  .post('/problem')
	  .send({
		description: 'Burraco no asfalto  e mau cheiro' ,
		address: 'Av. Ayrton Senna. Prox. a Guarda Municipal',
		tag: 'REDE DE ESGOTO' ,
		latitude: -12.140807,
		longitude: -38.408007  
	  })
	  .end()
	 response.assertStatus(200)
		
})
	
