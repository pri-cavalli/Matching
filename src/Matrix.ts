import { Participant } from "./Participant";
import { isNumber } from "util";
import _ from "lodash";

interface MatrixValue {
    [mentorName: string]: { [menteeName: string]: number}
}

export class Matrix {
    public value: MatrixValue = {};
    public allMentees: string[] = [];
    public allMentors: string[] = [];

    constructor(public size: number) { }

    public addCell(mentor: Participant | string, mentee: Participant | string, weight: number): void {
        const mentorName = mentor instanceof Participant ? mentor.name : mentor;
        const menteeName = mentee instanceof Participant ? mentee.name : mentee;
        if (!this.value[mentorName]) this.value[mentorName] = {};
        this.value[mentorName][menteeName] = weight;
        this.allMentees.push(menteeName)
        this.allMentees = _.uniq(this.allMentees);
        this.allMentors.push(mentorName)
        this.allMentors = _.uniq(this.allMentors);
    }

    public removeMenteeAndMentor(menteeToBeRemoved: string, mentorToBeRemoved: string): void{
        delete this.value[mentorToBeRemoved];
        this.allMentors = this.allMentors.filter(m => m !== mentorToBeRemoved);
        Object.keys(this.value).forEach(mentor => {
            if (isNumber(this.value[mentor][menteeToBeRemoved]) ) {
                delete this.value[mentor][menteeToBeRemoved];
            }
        });
        this.allMentees = this.allMentees.filter(m => m !== menteeToBeRemoved);
        this.size--;
    }
}