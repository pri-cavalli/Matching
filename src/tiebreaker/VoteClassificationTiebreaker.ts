import { Participant } from "../Participant";
import { VoteClassification } from "../Vote";
import { Tiebreaker, TiebreakerReturns } from "./Tiebreaker";

export class VoteClassificationTiebreaker extends Tiebreaker{
    public run(options: Participant[], decidingParticipant?: Participant): TiebreakerReturns {
        if (!decidingParticipant) {
            return options;
        }
        return this.filterOptionsByDecidingParticipantVoteClassification(decidingParticipant, options, VoteClassification.Green) ||
            this.filterOptionsByDecidingParticipantVoteClassification(decidingParticipant, options, VoteClassification.Yellow) ||
            this.filterOptionsByDecidingParticipantVoteClassification(decidingParticipant, options, VoteClassification.Red);
    }

    private filterOptionsByDecidingParticipantVoteClassification(
        decidingParticipant: Participant,
        options: Participant[],
        voteClassification: VoteClassification
    ): TiebreakerReturns {
        const filteredOptions = options.filter(option => decidingParticipant.votes[option.name] === voteClassification);
        return this.decideHowReturnOptionsByItsLength(filteredOptions);
    }
}