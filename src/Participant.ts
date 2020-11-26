import { Votes } from "./Vote";

export enum ParticipantType {
    Mentee = "Mentee",
    Mentor = "Mentor"
}

export interface WorkedWith {
    [participantId: string]: boolean
}

export class Participant {
    constructor(
    public type: ParticipantType,
    public id: string,
    public startDate: Date,
    public votes: Votes,
    public workedWith: WorkedWith
    ) {}

    public isHisFirstMatching(): boolean {
        return Object.keys(this.workedWith).length === 0;
    }

    public isOldForAMentee(): boolean {
        if (this.type === ParticipantType.Mentor) throw new Error("You shouldn't use this condition for a mentor");
        const thirteenMonths = 365 + 30;
        return dateDiffInDays(new Date(), this.startDate) >= thirteenMonths;
    }
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
function dateDiffInDays(a: Date, b: Date) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
}