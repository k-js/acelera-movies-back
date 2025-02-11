import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "login", type: "varchar" })
  login: string

  @Column({ name: "password", type: "varchar" })
  password: string
}
