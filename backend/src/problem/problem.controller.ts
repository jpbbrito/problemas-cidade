import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { Problem } from './problem.interface';

@Controller('api/problems')
export class ProblemController {
    constructor(private readonly problemService: ProblemService){}

    @Get(':id')
    index(@Param() param): Promise<Problem[]> {
        return this.problemService.index(param);
    }

    @Get()
    show(): Promise<Problem[]> {
        return this.problemService.show();
    }

    @Post()
    store(@Body() problem: Problem ): Promise<Problem> {
        return this.problemService.store(problem)
    }
}
