import { Participant } from "../Participant";
import { Tiebreaker, generalSwitchCase, TiebreakerReturns } from "./Tiebreaker";
import { VoteClassification } from "../Vote";

export const optionsPreferenceTiebreaker: Tiebreaker = (options: Participant[], decidingParticipant?: Participant) => {
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
    const filteredOptions = options.filter(option => option.votes[decidingParticipant.name] === voteClassification);
    return generalSwitchCase(filteredOptions);
}