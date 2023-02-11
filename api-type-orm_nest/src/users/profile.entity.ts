import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profile')
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname : string;
    @Column()
    lastname: string;
    @Column()
    age: number;
}