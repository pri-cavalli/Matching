import * as _ from "lodash";
import { Votes } from "./Vote";
import { PreferenceList } from "./PreferenceList";

export enum ParticipantType {
    Mentee = "Mentee",
    Mentor = "Mentor"
}

export const PairParticipantTypeMap: {[key in ParticipantType]: ParticipantType} = {
    [ParticipantType.Mentor]: ParticipantType.Mentee,
    [ParticipantType.Mentee]: ParticipantType.Mentor
}

export interface WorkedWith {
    participant: Participant;
    mentorshipStartDate: Date;
}

export class Participant {
    public alreadyWorkedWith: WorkedWith[] = [];
    public preferenceList: PreferenceList;
    public proposedToParticipant: Participant[] = [];
    constructor(
        public type: ParticipantType,
        public name: string,
        public startDate: Date,
        public votes: Votes
    ) { 
        this.preferenceList = new PreferenceList(this, [], []);
    }

    public whoPrefer(participant1: Participant, participant2: Participant): Participant | Participant[] {
        const rank1 = this.preferenceList.getRankNumberFromParticipant(participant1);
        const rank2 = this.preferenceList.getRankNumberFromParticipant(participant2);
        return rank1 === rank2 ? [participant1, participant2] :
               rank1 < rank2 ? participant1 : participant2;
    }
}