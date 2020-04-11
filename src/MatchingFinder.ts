import * as _ from "lodash";
import { Participant, PairParticipantTypeMap, ParticipantType } from "./Participant";
import { Tiebreaker } from "./tiebreaker/Tiebreaker";
import { PreferenceList, RankPosition } from "./PreferenceList";
import { isArray } from "util";
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

    public async run(): Promise<Matching[]> {
        let shouldStillRun = true;
        while(this.hasAvailableMentee() && shouldStillRun) {
            const mentee = this.getAvailableMentees().pop();
            if (!mentee) {
                throw new Error("no available mentees")
            }
            let nextMentorInRank = mentee.preferenceList.pop();
            if (!nextMentorInRank) {
                console.log(mentee.name)
                throw new Error("no available mentor")
            }

            if (nextMentorInRank.set) {
                nextMentorInRank = this.predictTheRejectionAndJumpIt(mentee, nextMentorInRank);
                if (nextMentorInRank.set && nextMentorInRank.set.length !== 0) {
                    let chosenMentor;
                    if (nextMentorInRank.set.length === 1) {
                        chosenMentor = nextMentorInRank.set[0];
                    } else {
                        const indexAnswer = await this.askToUserWhoUse(mentee, nextMentorInRank);
                        chosenMentor = nextMentorInRank.set[indexAnswer];
                        this.addBackOtherMentorsToMenteePreferenceList(mentee, chosenMentor, nextMentorInRank);
                    }
                    await this.menteeProposeToParticipant(mentee, chosenMentor);
                }
            } else if (nextMentorInRank.unique) {
                await this.menteeProposeToParticipant(mentee, nextMentorInRank.unique);
            }
        }
        if (shouldStillRun) {
            this.matchings.push(this.currentMatching)
        }
        return this.matchings;
    }

    private addBackOtherMentorsToMenteePreferenceList(mentee: Participant, proposedMentor: Participant, rank: RankPosition): void {
        const restOfSet = _.difference(rank.set!, [proposedMentor]);
        restOfSet.length === 1 ? 
            mentee.preferenceList.add({...rank, unique: restOfSet.pop(), set: undefined }) :
            mentee.preferenceList.add({...rank, set: restOfSet });
    }

    private async askToUserWhoUse(participant: Participant, optionsToUse: RankPosition | Participant[]): Promise<number> {
        const options = isArray(optionsToUse) ? optionsToUse : optionsToUse.set!;
        return new Promise(function(resolve) {
            let question = "For " + participant.type + " " + participant.name + ", which " + PairParticipantTypeMap[participant.type] + " is more appropriate?\n";
            options.forEach((m, i) => {
                question += (i+1) + " - " + m.name + "\n";
            });
            
            rl.question(question, (answer: string) => {
                resolve(parseInt(answer)-1);
            });
        });
    }

    public async menteeProposeToParticipant(mentee: Participant, mentor: Participant): Promise<void> {
        console.log(mentee.name + " proposed to " + mentor.name );
        mentee.proposedToParticipant.push(mentor);
        if (this.isParticipantFree(mentor)) {
            this.currentMatching.push({ mentor, mentee});
        } else {
            const currentMentee = this.getCurrentParticipantOfParticipant(mentor)!;
            if (await this.shouldParticipantChangeHisParticipant(mentor, currentMentee, mentee)) {
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

    private async shouldParticipantChangeHisParticipant(mentor: Participant, currentMentee: Participant, newMentee: Participant): Promise<boolean> {
        const favoriteParticipant = mentor.whoPrefer(currentMentee, newMentee);
        if (Array.isArray(favoriteParticipant)) {
            const answerIndex = await this.askToUserWhoUse(mentor, [currentMentee, newMentee]);
            return answerIndex === 1;
        }
        return favoriteParticipant !== currentMentee;
    }

    public swapMenteesFromMentor(mentor: Participant, currentMentee: Participant, newMentee: Participant): void {
        _.remove(this.currentMatching, (a) => this.isSameParticipant(a.mentor, mentor) || this.isSameParticipant(a.mentee, currentMentee) );
        this.currentMatching.push({ mentor, mentee: newMentee});
    }

    private isSameParticipant(participant1: Participant, participant2: Participant): boolean {
        return participant1.name === participant2.name;
    }

    private predictTheRejectionAndJumpIt(mentee: Participant, rank: RankPosition): RankPosition {
        rank.set!.forEach((mentor, index) => {
            if (this.isMentorGoingToRejectThePropose(mentor, mentee)) {
                mentee.proposedToParticipant.push(mentor);
                delete rank.set![index];                
            }
        });
        rank.set = _.compact(rank.set!);
        return rank;
    }

    private isMentorGoingToRejectThePropose(mentor: Participant, mentee: Participant): boolean {
        if (this.isParticipantFree(mentor)) return false;
        const currentMentee = this.getCurrentParticipantOfParticipant(mentor)!;
        const favoriteParticipant = mentor.whoPrefer(currentMentee, mentee);
        return !isArray(favoriteParticipant) && favoriteParticipant === currentMentee;
    }
 }