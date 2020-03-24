import { Participant } from "../Participant";
import { Tiebreaker, generalSwitchCase } from "./Tiebreaker";

export const oldestStartDateTiebreaker: Tiebreaker = (options: Participant[]) => {
    const sortedOptions = options.sort((participant1, participant2) => 
        participant1.startDate.getTime() - participant2.startDate.getTime());
    const oldestParticipants = sortedOptions.filter(participant => participant.startDate.getTime() === sortedOptions[0].startDate.getTime());

    return generalSwitchCase(oldestParticipants);
}