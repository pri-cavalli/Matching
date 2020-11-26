import { Participant } from "./Participant";
import _ from "lodash";

interface MatrixValue {
    [mentorId: string]: { [menteeId: string]: number}
}

export class Matrix {
    public value: MatrixValue = {};
    public allMentees: string[] = [];
    public allMentors: string[] = [];

    constructor(public size: number) { }

    public addCell(mentor: Participant | string, mentee: Participant | string, weight: number): void {
        const mentorId = mentor instanceof Participant ? mentor.id : mentor;
        const menteeId = mentee instanceof Participant ? mentee.id : mentee;
        if (!this.value[mentorId]) this.value[mentorId] = {};
        this.value[mentorId][menteeId] = weight;
        this.allMentees.push(menteeId)
        this.allMentees = _.uniq(this.allMentees);
        this.allMentors.push(mentorId)
        this.allMentors = _.uniq(this.allMentors);
    }

    public removeMenteeAndMentor(menteeToBeRemoved: string, mentorToBeRemoved: string): void{
        delete this.value[mentorToBeRemoved];
        this.allMentors = this.allMentors.filter(m => m !== mentorToBeRemoved);
        Object.keys(this.value).forEach(mentor => {
            if (typeof this.value[mentor][menteeToBeRemoved] === "number") {
                delete this.value[mentor][menteeToBeRemoved];
            }
        });
        this.allMentees = this.allMentees.filter(m => m !== menteeToBeRemoved);
        this.size--;
    }
}