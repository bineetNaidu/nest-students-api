import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { CreateTeacherDto, TeacherDto } from './dto/teacher.dto';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersSrv: TeachersService) {}

  @Get()
  getTeachers(): TeacherDto[] {
    return this.teachersSrv.findAll();
  }

  @Get('/:id')
  getTeacher(@Param('id') id: string): TeacherDto {
    return this.teachersSrv.findOne(id);
  }

  @Post()
  createTeacher(@Body() body: CreateTeacherDto): TeacherDto {
    return this.teachersSrv.create(body);
  }

  @Put('/:id')
  updateTeacher(@Param('id') id: string, @Body() body): TeacherDto {
    return this.teachersSrv.update(id, body);
  }

  @Delete('/:id')
  deleteTeacher(@Param('id') id: string): unknown {
    return this.teachersSrv.delete(id);
  }
}
