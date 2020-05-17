'use strict'
const Helpers = use('Helpers')
const Problem = use('App/Models/Problem')
const ImageProblem = use('App/Models/ImageProblem')

class ImageController {
    async store({ params, request }){
        const problem = await Problem.findOrFail(params.id)

        const images = request.file('image',{
            types: ['image'],
            size: '2mb'
        })

        await images.moveAll(Helpers.tmpPath('uploads'), (file) => {
            return { name: `${Date.now()}-${file.clientName}`}
        })
          
        if (!images.movedAll()) {
            return images.errors()
        }

        await Promise.all(
            images
                .movedList()
                .map(image => problem.image_problems().create({ path: image.fileName }))
        )
        return 'Ok'
    }
}

module.exports = ImageController
