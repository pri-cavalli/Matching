import { Participant } from "./Participant";

interface MatrixValue {
    [mentorName: string]: { [menteeName: string]: number}
}

export class Matrix {
    public value: MatrixValue = {};

    constructor(public size: number) { }

    public addCell(mentor: Participant, mentee: Participant, weight: number): void {
        if (!this.value[mentor.name]) this.value[mentor.name] = {};
        this.value[mentor.name][mentee.name] = weight;
    }
}