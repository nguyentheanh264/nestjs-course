import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CourseEntity } from './course.entity/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepo: Repository<CourseEntity>,
  ) {}

  async findAll(): Promise<CourseEntity[]> {
    return await this.courseRepo.find();
  }

  async findOne(id): Promise<CourseEntity> {
    return await this.courseRepo.findOne(id);
  }

  async create(course: CourseEntity): Promise<CourseEntity> {
    return await this.courseRepo.save(course);
  }

  async update(course: CourseEntity): Promise<UpdateResult> {
    return await this.courseRepo.update(course.id, course);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.courseRepo.delete(id);
  }
}
