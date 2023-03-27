import { CourseEntity } from './course.entity/course.entity';
import { CourseService } from './course.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAll(): Promise<CourseEntity[]> {
    return this.courseService.findAll();
  }

  @Get(':id')
  get(@Param() params) {
    return this.courseService.findOne(params.id);
  }

  @Post()
  create(@Body() course: CourseEntity) {
    return this.courseService.create(course);
  }

  @Put()
  update(@Body() task: CourseEntity) {
    return this.courseService.update(task);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.courseService.delete(params.id);
  }
}
