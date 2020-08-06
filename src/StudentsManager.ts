import { Student } from "./Student";
import { FullTimeMission } from "./FullTimeMission";

export class StudentManager {
    private allStudents: Student[] = []
    private allFullTimeMission: FullTimeMission[] = []

    public printStudents(): void {
        this.allStudents.forEach((item) => {
            this.allFullTimeMission.forEach((data) => {
                console.log(`
                NOME: ${item.name}
                E-MAIL: ${item.email}
                TURMA: ${data.getName()}
                IDADE: ${item.getAge()} anos
                `)
            })
        })
    }
}