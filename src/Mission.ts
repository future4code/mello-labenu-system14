export class Mello {

    constructor(
        protected id: string,
        protected name: string,
        protected startDate: string,
        protected endDate: string,
        protected teachers: string[],
        protected student: string[],
        protected currentModule: number | undefined,

    ) { }
}