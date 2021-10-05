import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ValidStudentMiddleware } from 'src/middlewares/validStudent.middleware';
import { StudentController } from './student.controller';
import { StudentsService } from './students.service';

@Module({
  controllers: [StudentController],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: 'students/:id',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: 'students/:id',
      method: RequestMethod.PUT,
    });
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: 'students/:id',
      method: RequestMethod.DELETE,
    });
  }
}
