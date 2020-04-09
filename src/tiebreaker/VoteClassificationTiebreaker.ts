import { Participant } from "../Participant";
import { VoteClassification } from "../Vote";
import { Tiebreaker, TiebreakerReturns, generalSwitchCase } from "./Tiebreaker";

export const voteClassificationTiebreaker: Tiebreaker = (options: Participant[], decidingParticipant?: Participant) => {
    if (!decidingParticipant) {
        return options;
    }
    return getFilteredOptionsByVoteClassification(decidingParticipant, options, VoteClassification.Green) ||
           getFilteredOptionsByVoteClassification(decidingParticipant, options, VoteClassification.Yellow) ||
           getFilteredOptionsByVoteClassification(decidingParticipant, options, VoteClassification.Red);
}

export function getFilteredOptionsByVoteClassification(
    decidingParticipant: Participant,
    options: Participant[],
    voteClassification: VoteClassification
): TiebreakerReturns {
    const filteredOptions = options.filter(option => decidingParticipant.votes[option.name] === voteClassification);
    return generalSwitchCase(filteredOptions);
}