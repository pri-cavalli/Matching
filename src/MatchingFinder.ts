import * as _ from "lodash";
import { Participant, Mentor, Mentee } from "./Participant";
import { Tiebreaker } from "./tiebreaker/Tiebreaker";
import { isArray } from "util";

export interface Pair {
    mentor: Mentor,
    mentee: Mentee
}

export type Matching = Pair[];

export default class MatchingFinder {
    public currentMatching: Matching = [];
    private matchings: Matching[] = [];
    constructor(
        private mentors: Mentor[],
        private mentees: Mentee[]
    ) { }

    public setTiebreaksInMentors(tiebreaks: Tiebreaker[]): void {
        this.mentors.forEach((participant: Participant) => {
            participant.tiebreakers = tiebreaks;
        });
    }

    public setTiebreaksInMentees(tiebreaks: Tiebreaker[]): void {
        this.mentees.forEach((participant: Participant) => {
            participant.tiebreakers = tiebreaks;
        });
    }

    public run(): Matching[] {
        let shouldStillRun = true;
        while(this.hasAvailableMentee() && shouldStillRun) {
            const mentee = this.getAvailableMentees().pop()!;
            const mentor = mentee.getHigherNonProposedMentor(this.mentors)!;

            if (isArray(mentor)) {
                mentor.map(m => {
                    const matchingCopy = this.copyMatchingFinder();
                    matchingCopy.menteeProposeToMentor(mentee, m);
                    this.addMatchingsThatRunInParallel(matchingCopy);
                    shouldStillRun = false;
                });
            } else {
                this.menteeProposeToMentor(mentee, mentor);
            }
        }
        if (shouldStillRun) {
            this.matchings.push(this.currentMatching)
        }
        return this.matchings;
    }

    public menteeProposeToMentor(mentee: Mentee, mentor: Mentor): void {
        mentee.proposedMentors.push(mentor);
        if (this.isParticipantFree(mentor)) {
            this.currentMatching.push({ mentor, mentee});
        } else {
            const currentMenteeOfMentor = this.getCurrentMenteeOfMentor(mentor)!;
            if (this.shouldMentorChangeHisMentee(mentor, currentMenteeOfMentor, mentee)) {
                this.swapMenteesFromMentor(mentor, currentMenteeOfMentor, mentee);
            }                
        }
    }

    private hasAvailableMentee(): boolean {
        return this.getAvailableMentees().length > 0;        
    }

    private getAvailableMentees(): Mentee[] {
        return this.mentees.filter(mentee => this.isParticipantFree(mentee));
    }

    private isParticipantFree(participant: Participant): boolean {
        return !this.currentMatching.some(pair => pair.mentee.name === participant.name || pair.mentor.name === participant.name);
    }

    private getCurrentMenteeOfMentor(mentor: Mentor): Mentee | undefined {
        const pair = this.currentMatching.find(pair => pair.mentor.name === mentor.name);
        return pair && pair.mentee;
    }

    private shouldMentorChangeHisMentee(mentor: Mentor, currentMentee: Mentee, newMentee: Mentee): boolean {
        const favoriteMentee = mentor.whoParticipantPrefer([currentMentee, newMentee]);
        if (Array.isArray(favoriteMentee)) {
            const matchingCopy = this.copyMatchingFinder();
            matchingCopy.swapMenteesFromMentor(mentor, currentMentee, newMentee);
            this.addMatchingsThatRunInParallel(matchingCopy);
            return false;
        }
        return favoriteMentee !== currentMentee;
    }

    public swapMenteesFromMentor(mentor: Mentor, currentMentee: Mentee, newMentee: Mentee): void {
        _.remove(this.currentMatching, { mentor, mentee: currentMentee});
        this.currentMatching.push({ mentor, mentee: newMentee});
    }

    private copyMatchingFinder(): MatchingFinder {
        const matchingCopy = new MatchingFinder(_.cloneDeep(this.mentors), _.cloneDeep(this.mentees));
        matchingCopy.currentMatching = _.cloneDeep(this.currentMatching);
        return matchingCopy;
    }

    private addMatchingsThatRunInParallel(matchingCopy: MatchingFinder): void {
        this.matchings = this.matchings.concat(matchingCopy.run());
    }
 }