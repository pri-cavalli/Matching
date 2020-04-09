import * as _ from "lodash";
import { Participant } from "./Participant";
import { Tiebreaker } from "./tiebreaker/Tiebreaker";
import { PreferenceList } from "./PreferenceList";

export interface Pair {
    mentor: Participant,
    mentee: Participant
}

export type Matching = Pair[];

export default class MatchingFinder {
    public currentMatching: Matching = [];
    private matchings: Matching[] = [];
    constructor(
        private mentors: Participant[],
        private mentees: Participant[]
    ) { }

    public setPreferenceListInMentors(tiebreaks: Tiebreaker[]): void {
        this.mentors.forEach((participant: Participant) => {
            participant.preferenceList = new PreferenceList(participant, tiebreaks, this.mentees);
        });
    }

    public setPreferenceListInMentees(tiebreaks: Tiebreaker[]): void {
        this.mentees.forEach((participant: Participant) => {
            participant.preferenceList = new PreferenceList(participant, tiebreaks, this.mentors);
        });
    }

    public run(): Matching[] {
        let shouldStillRun = true;
        this.mentees = this.mentees;
        while(this.hasAvailableMentee() && shouldStillRun) {
            const mentee = this.getAvailableMentees().pop();
            if (!mentee) {
                throw new Error("no available mentees")
            }
            const mentorsInHigherPosition = mentee.preferenceList.pop();
            if (!mentorsInHigherPosition) {
                throw new Error("no available mentor")
            }

            if (mentorsInHigherPosition.set) {
                mentorsInHigherPosition.set.map(m => {
                    const matchingCopy = this.copyMatchingFinder();
                    matchingCopy.menteeProposeToParticipant(mentee, m);
                    this.addMatchingsThatRunInParallel(matchingCopy);
                    shouldStillRun = false;
                });''
            } else if (mentorsInHigherPosition.unique) {
                this.menteeProposeToParticipant(mentee, mentorsInHigherPosition.unique);
            }
        }
        if (shouldStillRun) {
            this.matchings.push(this.currentMatching)
        }
        return this.matchings;
    }

    public menteeProposeToParticipant(mentee: Participant, mentor: Participant): void {
        mentee.proposedToParticipant.push(mentor);
        if (this.isParticipantFree(mentor)) {
            this.currentMatching.push({ mentor, mentee});
        } else {
            const currentMentee = this.getCurrentParticipantOfParticipant(mentor)!;
            if (this.shouldParticipantChangeHisParticipant(mentor, currentMentee, mentee)) {
                this.swapMenteesFromMentor(mentor, currentMentee, mentee);
            }                
        }
    }

    private hasAvailableMentee(): boolean {
        return this.getAvailableMentees().length > 0;        
    }

    private getAvailableMentees(): Participant[] {
        return this.mentees.filter(mentee => this.isParticipantFree(mentee));
    }

    private isParticipantFree(participant: Participant): boolean {
        return !this.currentMatching.some(pair => this.isSameParticipant(pair.mentor, participant) || this.isSameParticipant(pair.mentee, participant));
    }

    private getCurrentParticipantOfParticipant(mentor: Participant): Participant | undefined {
        const pair = this.currentMatching.find(pair => this.isSameParticipant(pair.mentor, mentor));
        return pair && pair.mentee;
    }

    private shouldParticipantChangeHisParticipant(mentor: Participant, currentMentee: Participant, newMentee: Participant): boolean {
        const favoriteParticipant = mentor.whoPrefer(currentMentee, newMentee);
        if (Array.isArray(favoriteParticipant)) {
            const matchingCopy = this.copyMatchingFinder();
            matchingCopy.swapMenteesFromMentor(mentor, currentMentee, newMentee);
            this.addMatchingsThatRunInParallel(matchingCopy);
            return false;
        }
        return favoriteParticipant !== currentMentee;
    }

    public swapMenteesFromMentor(mentor: Participant, currentMentee: Participant, newMentee: Participant): void {
        _.remove(this.currentMatching, (a) => this.isSameParticipant(a.mentor, mentor) || this.isSameParticipant(a.mentee, currentMentee) );
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

    private isSameParticipant(participant1: Participant, participant2: Participant): boolean {
        return participant1.name === participant2.name;
    }
 }