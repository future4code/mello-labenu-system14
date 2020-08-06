import moment from "moment";
import { User } from "./User";

moment.locale("pt-br");

export enum TeacherSpeciality {
    REACT = "React",
    REDUX = "Redux",
    TESTES = "Testes",
    TYPESCRIPT = "Typescript",
    OOP = "Programação Orientada À Objetos",
    BACKEND = "Backend"
}

export class Teacher implements User {
    constructor (
        public id: string,
        public name: string,
        public email: string, 
        public birthDate: moment.Moment,
        public specialities: TeacherSpeciality[]
    ) {}

    public getName(): string {
        return this.name
    }
}