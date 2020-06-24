import { Injectable } from '@nestjs/common';
import { InjectConnection} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Problem } from './problem.interface';

@Injectable()
export class ProblemService {
    constructor(
        @InjectConnection() 
        private connection: Connection,
    ) {}

    async index(param: any): Promise<Problem[]> {
        return await this.connection.query(`SELECT * FROM problems WHERE id_problem = :id`,[param.id]);
    }
    
    async show (): Promise<Problem[]> {
        return await this.connection.query(`SELECT * FROM PROBLEMS`);
    }
    
    async store(problem: Problem ): Promise<Problem> {
        const { description, address, latitude, longitude} = problem;
        await this.connection.query(`INSET INTO problems(description, address, latitude, longitude) 
            VALUES (:description, :address, :latitude, :longitude)`, [ description, address, latitude, longitude ] )
        return await this.connection.query(`SELECT * FROM problems 
            WHERE id_problem = (SELECT MAX(id_problem) FROM problems)`);
    }
}
