import * as _ from "lodash";
import { VoteClassification, Votes } from "./Vote";

export enum ParticipantType {
    Mentee = "Mentee",
    Mentor = "Mentor"
}

export abstract class Participant {
    public abstract type: ParticipantType;
    constructor(public name: string, public startDate: Date, public votes: Votes) { }
}

export class Mentor extends Participant {
    public type = ParticipantType.Mentor;
}

export class Mentee extends Participant {
    public type = ParticipantType.Mentee;
    public proposedMentors: Mentor[] = [];

    public getHigherNonProposedMentor(allMentors: Mentor[]): Mentor | null {
        const nonProposedMentor = this.getNonProposedMentors(allMentors);
        return this.getFirstInPreferenceListOfOptions(nonProposedMentor);
    }

    private getNonProposedMentors(allMentors: Mentor[]): Mentor[] {
        return _.xor(allMentors, this.proposedMentors);
    }

    private getFirstInPreferenceListOfOptions(options: Mentor[]): Mentor | null {
        return this.getOldestMentorOfClassification(options, VoteClassification.Green) || 
            this.getOldestMentorOfClassification(options, VoteClassification.Yellow) ||
            this.getOldestMentorOfClassification(options, VoteClassification.Red);
    }

    private getOldestMentorOfClassification(options: Mentor[], voteClassification: VoteClassification ): Mentor | null {
        const filteredOptions = options.filter(option => this.votes[option.name] === voteClassification);
        if (filteredOptions.length > 0) {
            return this.getOldestMentor(filteredOptions);
        }
        return null;
    }

    private getOldestMentor(options: Mentor[]): Mentor {
        const sortedOptions = options.sort((mentor1, mentor2) => 
            mentor2.startDate.getTime() - mentor1.startDate.getTime());
        return sortedOptions.pop()!;
    }
}