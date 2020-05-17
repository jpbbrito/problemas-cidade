'use strict'

const { trait, test } = use('Test/Suite')('Problem')
const User = use('App/Models/User')
const helpers = use('Helpers')

trait('Test/ApiClient')
trait('Auth/Client')

const userTest = {username: 'test', email: 'test@test.com', password:'test123'}
const problemTest = {
	description: 'Burraco no asfalto e mau cheiro' ,
	address: 'Av. Ayrton Senna. Prox. a Guarda Municipal',
	tag: 'REDE DE ESGOTO' ,
	latitude: -12.140807,
	longitude: -38.408007  
}

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
	  .post('/problems')
	  .header('authorization',`bearer ${userTest.auth.token}`)
	  .send(problemTest)
	  .end()
	 response.assertStatus(200)
	 response.assertJSONSubset(problemTest)	
})

test('send image problem', async ({ client}) => {
	const response = await client
	  .post(`/problems/1/images`)
	  .header('authorization',`bearer ${userTest.auth.token}`)
	  .attach('image[]',`${__dirname}/files/Corporate_Sunrise.png`)
	  .end()
	//console.log(response)
	response.assertStatus(200)
	//response.assertJSONSubset(problemTest)	
})

test('get all problem', async ({ client }) => {
	const response = await client
	  .get('/problems')
	  .end()
	response.assertStatus(200)
	response.assertJSONSubset([problemTest])	
})

test('get problem by id', async ({ client}) => {
	const response = await client
	  .get('/problems/1')
	  .end()
	response.assertStatus(200)
	response.assertJSONSubset(problemTest)	
})


	

