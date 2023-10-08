import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./users.entity.ts";

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;
  @Column()
  authorId: number; 
  
  @ManyToOne(() => Users)
  @JoinColumn({ name: "authorId" })
  author: Users;
}