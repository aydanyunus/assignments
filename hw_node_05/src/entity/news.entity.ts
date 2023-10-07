import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;
}