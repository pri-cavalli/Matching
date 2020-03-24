import * as _ from "lodash";
import { Votes } from "./Vote";
import { Tiebreaker, TiebreakerReturns } from "./tiebreaker/Tiebreaker";

export enum ParticipantType {
    Mentee = "Mentee",
    Mentor = "Mentor"
}

export abstract class Participant {
    public abstract type: ParticipantType;
    public tiebreakers: Tiebreaker[] = [];
    constructor(public name: string, public startDate: Date, public votes: Votes) { }

    public whoParticipantPrefer(options: Participant[]): TiebreakerReturns {
        return this.tiebreakers.reduce((currentOptions: TiebreakerReturns, tiebreaker) => {
            if (currentOptions && Array.isArray(currentOptions)) {
                return tiebreaker(currentOptions, this);
            }
            return currentOptions;
        }, options);
    }
}

export class Mentor extends Participant {
    public type = ParticipantType.Mentor;
}

export class Mentee extends Participant {
    public type = ParticipantType.Mentee;
    public proposedMentors: Mentor[] = [];

    public getHigherNonProposedMentor(allMentors: Mentor[]): Mentor | Mentor[] | null {
        const nonProposedMentors = this.getNonProposedMentors(allMentors);
        return this.whoParticipantPrefer(nonProposedMentors);
    }

    private getNonProposedMentors(allMentors: Mentor[]): Mentor[] {
        return _.xorBy(allMentors, this.proposedMentors, "name");
    }
}