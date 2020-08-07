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
const newNightMission: NightMission = new NightMission("4", moment("15/06/2020", "DD/MM/YYYY"), moment("15/12/2020", "DD/MM/YYYY"), [], [], 1)
// ADICIONANDO NOME NA TURMA
newNightMission.setName("Jackson-na-night")

// ADICIONANDO ALUNOS NA TURMA
const newStudent1: Student = new Student ("J1", "Maria Alice de Menezes", "menezesmaria@gmail.com", moment("20/04/1980", "DD/MM/YYYY"), ["origami", "música"])
newNightMission.addStudent(newStudent1)

const newStudent2: Student = new Student ("J2", "Renan Kajihara", "renan.kaji@gmail.com", moment("25/05/1982", "DD/MM/YYYY"), ["dançar", "música"])
newNightMission.addStudent(newStudent2)

const newStudent3: Student = new Student ("J3", "Lucas Suzuki", "suzukilucas@gmail.com", moment("27/03/1991", "DD/MM/YYYY"), ["compras", "praia", "livros"])
newNightMission.addStudent(newStudent3)

const newStudent4: Student = new Student ("J4", "Lais Teixeira", "teixeiralais@gmail.com", moment("09/01/1988", "DD/MM/YYYY"), ["carros", "futebol"])
newNightMission.addStudent(newStudent4)

const newStudent5: Student = new Student ("J5", "Nathalia Pimentel", "nathpimentel@gmail.com", moment("31/12/1990", "DD/MM/YYYY"), ["tecnologia", "dançar", "correr"])
newNightMission.addStudent(newStudent5)

// ADICIONANDO PROFS NA TURMA
const newTeacher1: Teacher = new Teacher ("P5", "Paula Arantes", "p.arantes@labenu.com.br", moment("06/05/1991", "DD/MM/YYYY"), [TeacherSpeciality.REACT])
newNightMission.addTeacher(newTeacher1)

const newTeacher2: Teacher = new Teacher ("P6", "Caio Teixeira", "teixeira.caio@labenu.com.br", moment("01/10/1994", "DD/MM/YYYY"), [TeacherSpeciality.REACT])
newNightMission.addTeacher(newTeacher2)

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
const studentAge: Student = new Student("M6", "Hello Kitty", "hellokitty@gmail.com", moment("31/03/1974", "DD/MM/YYYY"), ["amigos", "dançar"])

const viewAge = (id: string) => {
    if(studentAge.id === id) {
        console.log(`${studentAge.getName()} tem ${studentAge.getAge()} anos.`)
    }
}

viewAge("M6")