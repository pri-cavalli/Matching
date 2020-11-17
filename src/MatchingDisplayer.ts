import { VoteClassification, VotesNumber } from "./Vote";
import { Participant } from "./Participant";
import { Matching } from "./HungarianAlgorithm";
interface Pair {
    mentor: Participant,
    mentee: Participant
}

export namespace Display {
    export function matchings(matchings: Matching[], mentors: Participant[], mentees: Participant[]): void {
        matchings.forEach((m, i) => matching(m, mentors, mentees, i))
    }

    function matching(matching: Matching, mentors: Participant[], mentees: Participant[], index: number): void {
        const matchingObjs = matching.map(({mentor, mentee}) => {
            const mentorObj = mentors.find(m => m.id === mentor)!;
            const menteeObj = mentees.find(m => m.id === mentee)!;
            return {mentor: mentorObj, mentee: menteeObj};
        })
        const pairs = matchingObjs.reduce(simplifyPair, {});
        const votesNumber = matchingObjs.reduce(countVotes, { Green: 0, Yellow: 0, Red: 0 });
        const simplifyMatching = {...pairs, votesNumber};
        console.log("--------------------------------- Matching " + (index+1) + "---------------------------------")
        console.log(simplifyMatching)
    }

    function simplifyPair(acc: any, pair: Pair, index: number): any {
        acc["pair " + (index + 1)] = {
            mentor: pair.mentor.id + " voted " + pair.mentor.votes[pair.mentee.id],
            mentee: pair.mentee.id + " voted " + pair.mentee.votes[pair.mentor.id]
        };
        return acc;
    }

    function countVotes(accumulator: VotesNumber, pair: Pair): VotesNumber {
        if (VoteClassification.Green === pair.mentor.votes[pair.mentee.id]) accumulator.Green++;
        if (VoteClassification.Green === pair.mentee.votes[pair.mentor.id]) accumulator.Green++;
        if (VoteClassification.Yellow === pair.mentor.votes[pair.mentee.id]) accumulator.Yellow++;
        if (VoteClassification.Yellow === pair.mentee.votes[pair.mentor.id]) accumulator.Yellow++;
        if (VoteClassification.Red === pair.mentor.votes[pair.mentee.id]) accumulator.Red++;
        if (VoteClassification.Red === pair.mentee.votes[pair.mentor.id]) accumulator.Red++;
        return accumulator;
    }
 }