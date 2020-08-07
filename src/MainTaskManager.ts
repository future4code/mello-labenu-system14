import * as fs from 'fs';
import moment from "moment";
import { Student } from "./Student";
import { Mission } from "./Mission";

export class MainTaskManager {

    public printStudents = () : void => {
        const dataStudents: Student[] = JSON.parse(fs.readFileSync("./students.json").toString())
        const dataMissions: Mission[] = JSON.parse(fs.readFileSync("./missions.json").toString())
        
        for (let item of dataMissions) {
            for(let data of dataStudents) {
                console.log(`
                NOME: ${data.name}
                E-MAIL: ${data.email}
                TURMA: ${item.getName}
                IDADE: ${moment().diff(data.birthDate, "years")} anos
                `)
            }
        }
    }
}



