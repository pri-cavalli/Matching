import { Participant } from "../Participant";
import { Tiebreaker, TiebreakerReturns } from "./Tiebreaker";

export class OldestStartDateTiebreaker extends Tiebreaker{
    public run(options: Participant[]): TiebreakerReturns {
        const sortedOptions = options.sort((participant1, participant2) => 
            participant1.startDate.getTime() - participant2.startDate.getTime());
        const oldestParticipants = sortedOptions.filter(participant => participant.startDate.getTime() === sortedOptions[0].startDate.getTime());
        
        return this.decideHowReturnOptionsByItsLength(oldestParticipants);
    }
}