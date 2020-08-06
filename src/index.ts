import moment from "moment";
import { Student } from "./Student";
import { Teacher, TeacherSpeciality } from "./Teacher";
import { FullTimeMission } from "./FullTimeMission";
import { JSONFileManager } from "./JSONFileManager";
import { Mission } from "./Mission";
import { StudentManager } from "./StudentsManager";
import { NightMission } from "./NightMission";

moment.locale("pt-br");

/* ---------- ESTUDANTE ---------- */
const fileManagerStudent: JSONFileManager = new JSONFileManager ("./students.json")
const students: any = fileManagerStudent.readDatabase();

/* const newStudent: Student = new Student ("0025026789", "Rodrigo Rodrigues", "ro.drigues@gmail.com", moment("31/12/1995", "DD/MM/YYYY"), ["skate", "cinema"])
students.push(newStudent)
fileManagerStudent.writeToDatabase(students)
console.log("Estudante incluído com sucesso!") */


/* ---------- PROFESSOR ---------- */
const fileManagerTeacher: JSONFileManager = new JSONFileManager ("./teachers.json")
const teachers: any = fileManagerTeacher.readDatabase();

// const newTeacher: Teacher = new Teacher ("2536879852", "Soter Padua", "soter@labenu.com.br", moment("04/02/1994", "DD/MM/YYYY"), [TeacherSpeciality.REACT, TeacherSpeciality.TESTES])
// teachers.push(newTeacher)
// fileManagerTeacher.writeToDatabase(teachers)
// console.log("Professor incluído com sucesso!")


/* ---------- TURMA INTEGRAL ---------- */
const fileManagerMissions: JSONFileManager = new JSONFileManager ("./missions.json")
const missions: any = fileManagerMissions.readDatabase();

// const newFullTimeMission: FullTimeMission = new FullTimeMission("5", "mello", moment("13/04/2020", "DD/MM/YYYY"), moment("13/10/2020", "DD/MM/YYYY"), teachers, students, 3)
// missions.push(newFullTimeMission)
// fileManagerMissions.writeToDatabase(missions)
// console.log("Turma integral incluída com sucesso!")

/* ---------- TURMA NOTURNA ---------- */
const nightMissions: any = fileManagerMissions.readDatabase();

// const newFullTimeMission: NightMission = new NightMission("6", "bouman-na-night", moment("01/02/2020", "DD/MM/YYYY"), moment("01/08/2020", "DD/MM/YYYY"), teachers, students, 5)
// missions.push(newFullTimeMission)
// fileManagerMissions.writeToDatabase(missions)
// console.log("Turma noturna incluída com sucesso!")