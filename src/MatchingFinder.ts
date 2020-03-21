import * as _ from "lodash";
import { Participant, Mentor, Mentee } from "./Participant";
import { VoteClassification } from "./Vote";

export interface Pair {
    mentor: Mentor,
    mentee: Mentee
}

export default class MatchingFinder {
    private matching: Pair[] = [];
    constructor(
        private mentors: Mentor[],
        private mentees: Mentee[]
    ) { }

    public displayMatching(): void { 
        const simplifyPairs = this.matching.map(pair => `(${pair.mentor.name}, ${pair.mentee.name})`);
        console.log(simplifyPairs);
    }

    public run(): Pair[] {
        while(this.hasAvailableMentee()) {
            const mentee = this.getAvailableMentees().pop()!;
            const mentor = mentee.getHigherNonProposedMentor(this.mentors)!;

            if (this.isParticipantFree(mentor)) {
                this.matching.push({ mentor, mentee});
            } else {
                const currentMenteeOfMentor = this.getCurrentMenteeOfMentor(mentor)!;
                if (this.shouldMentorChangeHisMentee(mentor, currentMenteeOfMentor, mentee)) {
                    _.remove(this.matching, { mentor, mentee: currentMenteeOfMentor});
                    this.matching.push({ mentor, mentee});
                }                
            }
            mentee.proposedMentors.push(mentor);
        }
        return this.matching;
    }

    private hasAvailableMentee(): boolean {
        return this.getAvailableMentees().length > 0;        
    }

    private getAvailableMentees(): Mentee[] {
        return this.mentees.filter(mentee => this.isParticipantFree(mentee));
    }

    private isParticipantFree(participant: Participant): boolean {
        return !this.matching.some(pair => pair.mentee === participant || pair.mentor === participant);
    }

    private getCurrentMenteeOfMentor(mentor: Mentor): Mentee | undefined {
        const pair = this.matching.find(pair => pair.mentor === mentor);
        return pair && pair.mentee;
    }

    private shouldMentorChangeHisMentee(mentor: Mentor, currentMentee: Mentee, newMentee: Mentee): boolean {
        const favoriteMentee = this.whoMentorPrefer(mentor, currentMentee, newMentee);
        if (!favoriteMentee) {
            return newMentee.startDate.getTime() < currentMentee.startDate.getTime();
        }
        return favoriteMentee !== currentMentee;
    }

    private whoMentorPrefer(mentor: Mentor, mentee1: Mentee, mentee2: Mentee): Mentee | undefined {
        const menteeClassification1 = mentor.votes[mentee1.name];
        const menteeClassification2 = mentor.votes[mentee2.name];
        const bestClassification = getGreaterVoteClassification(menteeClassification1, menteeClassification2);
        if (!bestClassification) {
            return;
        }
        return bestClassification === menteeClassification1 ? mentee1 : mentee2;
    }
 }

 function getGreaterVoteClassification(
     classification1: VoteClassification,
     classification2: VoteClassification
 ): VoteClassification | undefined {
    if (classification1 === classification2) return;
    if (classification1 === VoteClassification.Green) return classification1;
    if (classification2 === VoteClassification.Green) return classification2;
    if (classification1 === VoteClassification.Yellow) return classification1;
    if (classification2 === VoteClassification.Yellow) return classification2;
    return;
 }