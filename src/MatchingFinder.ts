import * as _ from "lodash";
import { Participant, PairParticipantTypeMap } from "./Participant";
import { Tiebreaker } from "./tiebreaker/Tiebreaker";
import { PreferenceList, RankPosition } from "./PreferenceList";
import { type } from "os";
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
            const nextMentorInRank = mentee.preferenceList.pop();
            if (!nextMentorInRank) {
                console.log(mentee.name)
                throw new Error("no available mentor")
            }

            if (nextMentorInRank.set) {
                const indexAnswer = await this.askToUserWhoUse(mentee, nextMentorInRank);
                const betterMentor = nextMentorInRank.set[indexAnswer];

                const restOfSet = _.difference(nextMentorInRank.set!, [betterMentor]);
                restOfSet.length === 1 ? 
                    mentee.preferenceList.add({...nextMentorInRank, unique: restOfSet.pop(), set: undefined }) :
                    mentee.preferenceList.add({...nextMentorInRank, set: restOfSet });   
                console.log(mentee.name + " proposed to " + betterMentor.name );
                await this.menteeProposeToParticipant(mentee, betterMentor);
            } else if (nextMentorInRank.unique) {
                console.log(mentee.name + " proposed to " + nextMentorInRank.unique.name );
                await this.menteeProposeToParticipant(mentee, nextMentorInRank.unique);
            }
        }
        if (shouldStillRun) {
            this.matchings.push(this.currentMatching)
        }
        return this.matchings;
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

    // private copyMatchingFinder(): MatchingFinder {
    //     const matchingCopy = new MatchingFinder(_.cloneDeep(this.mentors), _.cloneDeep(this.mentees));
    //     matchingCopy.currentMatching = _.cloneDeep(this.currentMatching);
    //     return matchingCopy;
    // }

    // private addMatchingsThatRunInParallel(matchingCopy: MatchingFinder): void {
    //     this.matchings = this.matchings.concat(matchingCopy.run());
    // }

    private isSameParticipant(participant1: Participant, participant2: Participant): boolean {
        return participant1.name === participant2.name;
    }
 }