import moment from "moment";
moment.locale("pt-br");

export interface User {
    id: string;
    name: string;
    email: string;
    birthDate: moment.Moment;

    getName(): void   
}