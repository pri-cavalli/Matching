import * as _ from "lodash";
import { VoteClassification, VotesNumber } from "./Vote";
import { Matching, Pair } from "./MatchingFinder";

export namespace Display {

    export function matching(matchings: Matching[]): void {
        const simplifyMatchings = matchings.map(
            (matching) => {
                const pairs = matching.reduce(simplifyPair, {});
                const votesNumber = matching.reduce(countVotes, { Green: 0, Yellow: 0, Red: 0 });
                return {...pairs, votesNumber};
            }
        );
        const pairs = _.uniqWith(simplifyMatchings, _.isEqual).sort((a,b) => 
            a.votesNumber.Green === b.votesNumber.Green ? 
                b.votesNumber.Red - a.votesNumber.Red :
                a.votesNumber.Green - b.votesNumber.Green
        );
        console.log(pairs)
    }

    function simplifyPair(acc: any, pair: Pair, index: number): any {
        acc["pair" + index] = {
            mentor: pair.mentor.name + " voted " + pair.mentor.votes[pair.mentee.name],
            mentee: pair.mentee.name + " voted " + pair.mentee.votes[pair.mentor.name]
        };
        return acc;
    }

    function countVotes(accumulator: VotesNumber, pair: Pair): VotesNumber {
        if (VoteClassification.Green === pair.mentor.votes[pair.mentee.name]) accumulator.Green++;
        if (VoteClassification.Green === pair.mentee.votes[pair.mentor.name]) accumulator.Green++;
        if (VoteClassification.Yellow === pair.mentor.votes[pair.mentee.name]) accumulator.Yellow++;
        if (VoteClassification.Yellow === pair.mentee.votes[pair.mentor.name]) accumulator.Yellow++;
        if (VoteClassification.Red === pair.mentor.votes[pair.mentee.name]) accumulator.Red++;
        if (VoteClassification.Red === pair.mentee.votes[pair.mentor.name]) accumulator.Red++;
        return accumulator;
    }
 }