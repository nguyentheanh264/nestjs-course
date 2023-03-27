import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  alias: string;

  @Column({ length: 30 })
  code: string;

  @Column()
  avatarUrl: string;

  @Column()
  shortDescription: string;

  @Column()
  description: string;

  @Column()
  isActive: boolean;
}
