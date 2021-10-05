import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StudentsDto } from 'src/students/dto/students.dto';
import { StudentsService } from 'src/students/students.service';

@Controller('teachers/:id/students')
export class StudentsTeachersController {
  constructor(private readonly studentSrv: StudentsService) {}

  @Get()
  getStudents(@Param('id') id: string): Promise<StudentsDto[]> {
    return Promise.resolve(this.studentSrv.getStudentsByTeacherID(id));
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('id') id: string,
    @Param('studentId') studentId: string,
    @Body('newTeacherId') newTeacherId: string,
  ): Promise<StudentsDto> {
    return Promise.resolve(
      this.studentSrv.updateStudentTeacher(id, studentId, newTeacherId),
    );
  }
}
