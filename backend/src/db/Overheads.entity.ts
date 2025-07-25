//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Overheads')
export class OverheadsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  overheadType: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('real', { nullable: true })
  amount: number;

  @Column('date', { nullable: true })
  date: Date;
}
