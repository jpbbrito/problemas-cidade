import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProblemModule } from './problem/problem.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProblemModule,
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot()    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
