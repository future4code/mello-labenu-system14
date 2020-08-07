import * as fs from 'fs';
import moment from "moment";
import { Student } from "./Student";
import { Mission } from "./Mission";
import { Teacher } from './Teacher';

export class MainTaskManager {

    public printStudents = () : void => {
        const dataStudents: Student[] = JSON.parse(fs.readFileSync("./students.json").toString())
        
        for(let data of dataStudents) {
            console.log (
                `
                NOME: ${data.name}
                E-MAIL: ${data.email}
                IDADE: ${moment().diff(data.birthDate, "years")} anos
                `
            )
        }

    }

    public printTeachers = () : void => {
        const dataTeachers: Teacher[] = JSON.parse(fs.readFileSync("./teachers.json").toString())

        for(let data of dataTeachers) {
            console.log (
                `
                NOME: ${data.name}
                E-MAIL: ${data.email}
                IDADE: ${moment().diff(data.birthDate, "years")} anos
                ESPECIALIDADES: ${data.specialities}
                `
            )
        }
    }
}



