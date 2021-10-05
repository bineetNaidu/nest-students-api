import { Module } from '@nestjs/common';
import { StudentsModule } from 'src/students/students.module';
import { StudentsTeachersController } from './students.controller';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  imports: [StudentsModule],
  controllers: [TeachersController, StudentsTeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
