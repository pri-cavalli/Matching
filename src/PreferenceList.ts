import { Participant, ParticipantType } from "./Participant";
import { Tiebreaker, TiebreakerReturns } from "./tiebreaker/Tiebreaker";
import { isArray } from "util";
import _ from "lodash";

interface RankPosition {
    set?: Participant[];
    unique?: Participant;
    position: number
}

// this is like a stack data structure
export class PreferenceList {
    private list: RankPosition[] = [];
    private count = 0;
    constructor(listOwner: Participant, tiebreakers: Tiebreaker[], options: Participant[]) {
        options = this.addParticipantsAlreadyWorkedWith(listOwner, options.slice());
        this.addOtherParticipants(listOwner, tiebreakers, options);
        this.fillRankPosition();
    }
    
    public add(rankPosition: RankPosition): void {
        this.list[this.count] = rankPosition;
        this.count++;
    }

    public pop(): RankPosition | null {
        if (this.count === 0) {
            return null;
        }
        this.count--;
        const rankPosition = this.list[this.count];
        delete this.list[this.count];
        return rankPosition;
    }

    public size(): number {
        return this.count;
    }
    
    private addParticipantsAlreadyWorkedWith(listOwner: Participant, options: Participant[]): Participant[] { // oldest mentorship has the participant added first
        listOwner.alreadyWorkedWith
            .sort((workedA,workedB) => workedA.mentorshipStartDate.getTime() - workedB.mentorshipStartDate.getTime())
            .forEach(({participant} )=>{
                this.add({unique: participant, position: 0});
                const index = options.indexOf(participant);
                delete options[index]
                options = _.compact(options);
            });
        return options;
    }

    private addOtherParticipants(listOwner: Participant, tiebreakers: Tiebreaker[], options: Participant[]):void {
        const list: RankPosition[] = [];
        while (options.length > 0)
        {
            const highestParticipants = tiebreakers.reduce((currentOptions: TiebreakerReturns, tiebreaker) => {
                if (currentOptions && Array.isArray(currentOptions)) {
                    return tiebreaker(currentOptions, listOwner);
                }
                return currentOptions;
            }, options);
            if (isArray(highestParticipants)) {
                list.push({ set: highestParticipants, position: 0});
                options = _.differenceBy(options, highestParticipants);
            } else if (highestParticipants !== null) {
                list.push({ unique: highestParticipants, position: 0});
                options = _.differenceBy(options, [highestParticipants]);
            }
            options = _.compact(options);
        }
       list.reverse().forEach(rankPosition => {
           this.add(rankPosition)
       });
    }

    private fillRankPosition(): void {
        this.list = this.list.map((rankPosition, index) => {
            return {...rankPosition, position: this.count - index}
        });
    }

    public getRankNumberFromParticipant(participant: Participant): number {
        for(const {unique, set, position} of this.list) {
            if ((unique && unique.name === participant.name) ||
                (set && set.some(p => p.name === participant.name))) {
                return position;
            }
        };
        throw new Error("The participant " + participant + " isn't in the preference list.")
    }

}
