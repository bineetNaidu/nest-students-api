// import { DTO } from "@nestjs/common"

export class StudentsDto {
  readonly id: string;
  name: string;
  teacher: string;
}

export class CreateStudentDto {
  name: string;
  teacher: string;
}

export class UpdateStudentDto {
  name: string;
  teacher: string;
}
