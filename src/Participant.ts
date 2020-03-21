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
        const greenOptions = options.filter(option => this.votes[option.name] === VoteClassification.Green);
        if (greenOptions.length > 0) {
            return this.getOldestMentor(greenOptions);
        }
        const yellowOptions = options.filter(option => this.votes[option.name] === VoteClassification.Yellow);
        if (yellowOptions.length > 0) {
            return yellowOptions[0];
        }
        const redOptions = options.filter(option => this.votes[option.name] === VoteClassification.Red);
        if (redOptions.length > 0) {
            return redOptions[0];
        }
        return null;
    }

    private getOldestMentor(options: Mentor[]): Mentor {
        const sortedOptions = options.sort((mentor1, mentor2) => 
            mentor2.startDate.getTime() - mentor1.startDate.getTime());
        return sortedOptions.pop()!;
    }
}