import moment from "moment";
import { Student } from "./Student";
import { Teacher, TeacherSpeciality } from "./Teacher";
import { FullTimeMission } from "./FullTimeMission";
import { JSONFileManager } from "./JSONFileManager";
import { Mission } from "./Mission";
import { StudentManager } from "./StudentsManager";
import { NightMission } from "./NightMission";
import * as fs from 'fs'
import { runInNewContext } from "vm";

moment.locale("pt-br");

/* ---------- ESTUDANTE ---------- */
const fileManagerStudent: JSONFileManager = new JSONFileManager ("./students.json")
const students: any = fileManagerStudent.readDatabase();


/* ---------- PROFESSOR ---------- */
const fileManagerTeacher: JSONFileManager = new JSONFileManager ("./teachers.json")
const teachers: any = fileManagerTeacher.readDatabase();

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* ---------- TURMA INTEGRAL ---------- */
const fileManagerMissions: JSONFileManager = new JSONFileManager ("./missions.json")
const missions: any = fileManagerMissions.readDatabase();

// const newFullTimeMission: FullTimeMission = new FullTimeMission("6", moment("15/05/2020", "DD/MM/YYYY"), moment("15/11/2020", "DD/MM/YYYY"), [], [], 2)
// // ADICIONANDO NOME NA TURMA
// newFullTimeMission.setName("Turing")

// // ADICIONANDO ALUNOS NA TURMA
// const newStudent1: Student = new Student ("T1", "Leonardo de Jesus", "leojesus@gmail.com", moment("05/05/1984", "DD/MM/YYYY"), ["origami", "música"])
// newFullTimeMission.addStudent(newStudent1)

// const newStudent2: Student = new Student ("T2", "Mariana Barbora", "m.barbosa@gmail.com", moment("25/03/1990", "DD/MM/YYYY"), ["dançar", "música"])
// newFullTimeMission.addStudent(newStudent2)

// const newStudent3: Student = new Student ("T3", "Cássia Feliciano", "ca.fe@gmail.com", moment("03/11/1995", "DD/MM/YYYY"), ["compras", "praia", "livros"])
// newFullTimeMission.addStudent(newStudent3)

// const newStudent4: Student = new Student ("T4", "João Rodrigues da Silva", "joaosilva@gmail.com", moment("11/07/1987", "DD/MM/YYYY"), ["carros", "futebol"])
// newFullTimeMission.addStudent(newStudent4)

// const newStudent5: Student = new Student ("T5", "Renato Fabiano", "re_fabianoa@gmail.com", moment("13/12/1992", "DD/MM/YYYY"), ["tecnologia", "dançar", "correr"])
// newFullTimeMission.addStudent(newStudent5)

// // ADICIONANDO PROFS NA TURMA
// const newTeacher1: Teacher = new Teacher ("P3", "Soter Padua", "soter@labenu.com.br", moment("30/07/1991", "DD/MM/YYYY"), [TeacherSpeciality.REACT, TeacherSpeciality.TESTES])
// newFullTimeMission.addTeacher(newTeacher1)

// const newTeacher2: Teacher = new Teacher ("P4", "Pedro Darvas", "darvas@labenu.com.br", moment("01/12/1992", "DD/MM/YYYY"), [TeacherSpeciality.REACT, TeacherSpeciality.BACKEND])
// newFullTimeMission.addTeacher(newTeacher2)

// // ATUALIZANDO ARRAY
// missions.push(newFullTimeMission)
// fileManagerMissions.writeToDatabase(missions)
// console.log("Turma integral incluída com sucesso!")

// // ADICIONANDO ALUNO NO JSON DE ALUNOS
// students.push(newStudent1, newStudent2, newStudent3, newStudent4, newStudent5)
// fileManagerStudent.writeToDatabase(students)
// console.log("Estudantes incluídos no cadastro com sucesso!")

// //ADICIONANDO PROFS NO JSON DE PROFS
// teachers.push(newTeacher1, newTeacher2)
// fileManagerTeacher.writeToDatabase(teachers)
// console.log("Professores incluídos no cadastro com sucesso!")

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* ---------- TURMA NOTURNA ---------- */
const newNightMission: NightMission = new NightMission("3", moment("15/06/2020", "DD/MM/YYYY"), moment("15/12/2020", "DD/MM/YYYY"), [], [], 4)
// ADICIONANDO NOME NA TURMA
newNightMission.setName("Bouman-na-night")

// ADICIONANDO ALUNOS NA TURMA
// const newStudent1: Student = new Student ("B1", "Douglas Filho", "douglas_filho@gmail.com", moment("12/11/1990", "DD/MM/YYYY"), ["origami", "música"])
// newNightMission.addStudent(newStudent1)

// const newStudent2: Student = new Student ("B2", "Lucas Duarte", "lucasduarte@gmail.com", moment("20/04/1992", "DD/MM/YYYY"), ["dançar", "música"])
// newNightMission.addStudent(newStudent2)

// const newStudent3: Student = new Student ("B3", "Michelle Louzada", "louzada.mi@gmail.com", moment("15/07/1985", "DD/MM/YYYY"), ["compras", "praia", "livros"])
// newNightMission.addStudent(newStudent3)

// const newStudent4: Student = new Student ("B4", "Claudia Trevizan", "claudia.trevi@gmail.com", moment("01/04/1978", "DD/MM/YYYY"), ["carros", "futebol"])
// newNightMission.addStudent(newStudent4)

// const newStudent5: Student = new Student ("B5", "René Monteiro", "rene.m@gmail.com", moment("05/04/1981", "DD/MM/YYYY"), ["tecnologia", "dançar", "correr"])
// newNightMission.addStudent(newStudent5)

// // ADICIONANDO PROFS NA TURMA
// const newTeacher1: Teacher = new Teacher ("P7", "Amanda Rangel", "amanda@labenu.com.br", moment("06/05/1987", "DD/MM/YYYY"), [TeacherSpeciality.TYPESCRIPT, TeacherSpeciality.OOP])
// newNightMission.addTeacher(newTeacher1)

// const newTeacher2: Teacher = new Teacher ("P8", "João Golias", "goli@labenu.com.br", moment("01/08/1992", "DD/MM/YYYY"), [TeacherSpeciality.BACKEND, TeacherSpeciality.TYPESCRIPT])
// newNightMission.addTeacher(newTeacher2)

// // ATUALIZANDO ARRAY
// missions.push(newNightMission)
// fileManagerMissions.writeToDatabase(missions)
// console.log("Turma noturna incluída com sucesso!")

// // ADICIONANDO ALUNO NO JSON DE ALUNOS
// students.push(newStudent1, newStudent2, newStudent3, newStudent4, newStudent5)
// fileManagerStudent.writeToDatabase(students)
// console.log("Estudantes incluídos no cadastro com sucesso!")

// //ADICIONANDO PROFS NO JSON DE PROFS
// teachers.push(newTeacher1, newTeacher2)
// fileManagerTeacher.writeToDatabase(teachers)
// console.log("Professores incluídos no cadastro com sucesso!")

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* ---------- PEGAR IDADE A PARTIR DO ID ---------- */

const viewAge = (id: string) : void => {
    const dataStudents: Student[] = JSON.parse(fs.readFileSync("./students.json").toString())
    
    for(let data of dataStudents) {
        if(data.id === id) {
            return (
                console.log(`${data.name} tem ${moment().diff(data.birthDate, "years")} anos.`)
            )
        }
    }
}

viewAge("M1")
viewAge("M2")
viewAge("M3")