import moment from "moment";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

moment.locale("pt-br");
export abstract class Mission {
   
    constructor(
        private id: string,
        private name: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[],
        private students: Student[],
        private currentModule: number | undefined
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getStartDate(): moment.Moment {
        return this.startDate;
    }

    public getEndDate(): moment.Moment {
        return this.endDate;
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule;
    }

    public addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }

    public addStudent(student: Student) {
        this.students.push(student);
    }

    public setName(name: string) {
        this.name = name;
    }
}