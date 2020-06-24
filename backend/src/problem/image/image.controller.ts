import { Controller, Get, Res, Post, Param, UseInterceptors, UploadedFiles, HttpStatus } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { ImageService } from './image.service';

@Controller('api/problems')
export class ImageController {

    constructor(private readonly imageService: ImageService) {}

    @Post(':id/images')
    @UseInterceptors(FilesInterceptor('image'))
    async uploadFile(@UploadedFiles() file, @Res() res: Response, @Param() param) {
        const result = await this.imageService.store(file, param.id)
        console.log(result);
        if(result === undefined ) {
            res.status(HttpStatus.NOT_ACCEPTABLE).json('Problem not found')
        } else {
            res.status(HttpStatus.OK).send(result);
        }
    }

    @Get(':id/images')
    async index(@Param() param) {
        const result = await this.imageService.index(param.id);
        return result;
    }

    @Get('images/:imgname')
    async imageByName(@Param('imgname') image, @Res() res: Response) {
        return res.sendFile(image, { root: 'uploads/problem'})
    }

}
