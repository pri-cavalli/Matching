import { Participant } from "../Participant";
import { VoteClassification } from "../Vote";
import { Tiebreaker, TiebreakerReturns } from "./Tiebreaker";

export const voteClassificationTiebreaker: Tiebreaker = (options: Participant[], decidingParticipant?: Participant) => {
    if (!decidingParticipant) {
        return options;
    }
    return getFilteredOptionsByVoteClassification(decidingParticipant, options, VoteClassification.Green) ||
           getFilteredOptionsByVoteClassification(decidingParticipant, options, VoteClassification.Yellow) ||
           getFilteredOptionsByVoteClassification(decidingParticipant, options, VoteClassification.Red);
}

function getFilteredOptionsByVoteClassification(
    decidingParticipant: Participant,
    options: Participant[],
    voteClassification: VoteClassification
): TiebreakerReturns {
    const filteredOptions = options.filter(option => decidingParticipant.votes[option.name] === voteClassification);
    switch(filteredOptions.length) {
        case 0: 
            return null;
        case 1:
            return filteredOptions[0];
        default:
            return filteredOptions;
    }
}