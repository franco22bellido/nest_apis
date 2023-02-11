import { User } from "src/users/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    title: string
    @Column()
    content: string

    //no seria mejor escrbir la anotación 'join column'?
    @Column()
    authorId: number
    @ManyToOne(()=> User, user => user.posts)
    author: User;
}