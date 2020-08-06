import moment from "moment";
import { User } from "./User";

moment.locale("pt-br");

export class Student implements User {
    constructor (
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[]
    ) {}

    public getAge(): number {
        return moment().diff(this.birthDate, "years")
    }

    public getName(): string {
        return this.name
    }
}
