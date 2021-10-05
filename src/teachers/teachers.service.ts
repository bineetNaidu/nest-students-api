import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { CreateTeacherDto, TeacherDto } from './dto/teacher.dto';

@Injectable()
export class TeachersService {
  private teachers: TeacherDto[] = teachers;

  findAll(): TeacherDto[] {
    return this.teachers;
  }

  findOne(id: string): TeacherDto {
    return this.teachers.find((teacher) => teacher.id === id);
  }

  create(data: CreateTeacherDto): TeacherDto {
    const newTeacher = {
      id: (this.teachers.length + 1).toString(),
      ...data,
    };
    this.teachers.push(newTeacher);
    return newTeacher;
  }

  update(id: string, data: CreateTeacherDto): TeacherDto {
    const teacher = this.findOne(id);
    Object.assign(teacher, data);
    return teacher;
  }

  delete(id: string): any {
    const teacher = this.findOne(id);
    this.teachers = this.teachers.filter((teacher) => teacher.id !== id);
    return { deleted_id: teacher.id };
  }
}
