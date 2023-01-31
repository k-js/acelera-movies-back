import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: String

  @Column({ name: "gender", type: "varchar" })
  gender: String

  @Column({ name: "classification", type: "varchar" })
  classification: String

  @Column({ name: "subtitle", type: "varchar" })
  subtitle: String

  @Column({ name: "image", type: "varchar" })
  image: String

  @Column({ name: "release_date", type: "varchar" })
  release_date: String

  @Column({ name: "director", type: "varchar" })
  director: String

  @Column({ name: "writer", type: "varchar" })
  writer: String

  @Column({ name: "studio", type: "varchar" })
  studio: String

  @Column({ name: "actors", type: "text" })
  actors: String

  @Column({ name: "resume", type: "text" })
  resume: String

  @Column({ name: "awards", type: "text" })
  awards: String

  @Column({ name: "note", type: "int" })
  note: Number
}
