import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Cart } from "./cart.entity";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @OneToOne((type) => Cart, {
    eager: true
  })@JoinColumn()
  cart: Cart

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
