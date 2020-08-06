import moment from "moment";
import { Student } from "./Student";
import { Teacher, TeacherSpeciality } from "./Teacher";

moment.locale("pt-br");

const newStudent1: Student = new Student ("0120063870", "Renata Karato", "rmkarato@gmail.com", moment("06/04/1989", "DD/MM/YYYY"), ["correr", "dormir"])
console.log(newStudent1)

const newTeacher1: Teacher = new Teacher ("0123456789", "Paula Arantes", "paula@labenu.com.br", moment("06/07/1992", "DD/MM/YYYY"), [TeacherSpeciality.REACT])
console.log(newTeacher1)