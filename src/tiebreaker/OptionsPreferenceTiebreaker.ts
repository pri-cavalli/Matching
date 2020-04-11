import { Participant } from "../Participant";
import { Tiebreaker, TiebreakerReturns } from "./Tiebreaker";
import { VoteClassification } from "../Vote";

export class OptionsPreferenceTiebreaker extends Tiebreaker{
    public run(options: Participant[], decidingParticipant?: Participant): TiebreakerReturns {
        if (!decidingParticipant) {
            return options;
        }
        return this.filterOptionsByTheirVoteClassification(decidingParticipant, options, VoteClassification.Green) ||
               this.filterOptionsByTheirVoteClassification(decidingParticipant, options, VoteClassification.Yellow) ||
               this.filterOptionsByTheirVoteClassification(decidingParticipant, options, VoteClassification.Red);
    }

    private filterOptionsByTheirVoteClassification(
        decidingParticipant: Participant,
        options: Participant[],
        voteClassification: VoteClassification
    ): TiebreakerReturns {
        const filteredOptions = options.filter(option => option.votes[decidingParticipant.name] === voteClassification);
        return this.decideHowReturnOptionsByItsLength(filteredOptions);
    }
}
