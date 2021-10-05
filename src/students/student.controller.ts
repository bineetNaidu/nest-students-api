import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import {
  CreateStudentDto,
  StudentsDto,
  UpdateStudentDto,
} from './dto/students.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentSrv: StudentsService) {}

  @Get()
  async getStudents(): Promise<StudentsDto[]> {
    return this.studentSrv.getStudents();
  }

  @Get('/:id')
  async getStudent(@Param('id') id: string): Promise<StudentsDto> {
    return this.studentSrv.getStudentById(id);
  }

  @Post()
  async createStudent(@Body() body: CreateStudentDto): Promise<StudentsDto> {
    return this.studentSrv.addStudent(body);
  }

  @Delete('/:id')
  async deleteStudent(@Param('id') id: string): Promise<any> {
    return this.studentSrv.deleteStudent(id);
  }

  @Put('/:id')
  async updateStudent(
    @Param('id') id: string,
    @Body() body: UpdateStudentDto,
  ): Promise<StudentsDto> {
    return this.studentSrv.updateStudent(id, body);
  }
}
