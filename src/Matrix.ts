import { Participant } from "./Participant";

interface MatrixValue {
    [mentorName: string]: { [menteeName: string]: number}
}

export class Matrix {
    public value: MatrixValue = {};

    constructor(public size: number) { }

    public addCell(mentor: Participant | string, mentee: Participant | string, weight: number): void {
        const mentorName = mentor instanceof Participant ? mentor.name : mentor;
        const menteeName = mentee instanceof Participant ? mentee.name : mentee;
        if (!this.value[mentorName]) this.value[mentorName] = {};
        this.value[mentorName][menteeName] = weight;
    }
}