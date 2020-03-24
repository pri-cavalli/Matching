import * as _ from "lodash";
import { VoteClassification } from "./Vote";
import { Matching, Pair } from "./MatchingFinder";

interface VotesNumber {
    green: number,
    yellow: number,
    red: number
}

export namespace Display {

    export function matching(matchings: Matching[]): void {
        const simplifyMatchings = matchings.map(
            (matching) => {
                const pairs = matching.reduce(simplifyPair, {});
                const votesNumber = matching.reduce(countVotes, { green: 0, yellow: 0, red: 0 });
                return {...pairs, votesNumber};
            }
        );
        const pairs = _.uniqWith(simplifyMatchings, _.isEqual);
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
        if (VoteClassification.Green === pair.mentor.votes[pair.mentee.name]) accumulator.green++;
        if (VoteClassification.Green === pair.mentee.votes[pair.mentor.name]) accumulator.green++;
        if (VoteClassification.Yellow === pair.mentor.votes[pair.mentee.name]) accumulator.yellow++;
        if (VoteClassification.Yellow === pair.mentee.votes[pair.mentor.name]) accumulator.yellow++;
        if (VoteClassification.Red === pair.mentor.votes[pair.mentee.name]) accumulator.red++;
        if (VoteClassification.Red === pair.mentee.votes[pair.mentor.name]) accumulator.red++;
        return accumulator;
    }
 }