import * as _ from "lodash";
import { Votes } from "./Vote";

export enum ParticipantType {
    Mentee = "Mentee",
    Mentor = "Mentor"
}

export const PairParticipantTypeMap: {[key in ParticipantType]: ParticipantType} = {
    [ParticipantType.Mentor]: ParticipantType.Mentee,
    [ParticipantType.Mentee]: ParticipantType.Mentor
}

export interface WorkedWith {
    participant: string;
    mentorshipStartDate: Date;
}

export interface Participant {
    type: ParticipantType;
    name: string;
    startDate: Date;
    votes: Votes;
    workedWith: WorkedWith[];
}