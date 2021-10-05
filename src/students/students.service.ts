import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
  CreateStudentDto,
  StudentsDto,
  UpdateStudentDto,
} from './dto/students.dto';

@Injectable()
export class StudentsService {
  private students = students;

  getStudents(): StudentsDto[] {
    return this.students;
  }

  getStudentById(id: string): StudentsDto {
    return this.students.find((student) => student.id === id);
  }

  addStudent(student: CreateStudentDto): StudentsDto {
    const id = this.students.length + 1 + '';
    const newStudent = { id, ...student };
    this.students.push(newStudent);

    return newStudent;
  }

  updateStudent(id: string, student: UpdateStudentDto): StudentsDto {
    const index = this.students.findIndex((s) => s.id === id);
    this.students[index] = { ...this.students[index], ...student };

    return this.students[index];
  }

  deleteStudent(id: string) {
    this.students = this.students.filter((student) => student.id !== id);
    return { deleted_id: id };
  }

  getStudentsByTeacherID(teacherID: string): StudentsDto[] {
    return this.students.filter((student) => student.teacher === teacherID);
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
    newTeacherId: string,
  ): StudentsDto {
    const index = this.students.findIndex((s) => s.id === studentId);
    this.students[index].teacher = newTeacherId;

    return this.students[index];
  }
}
