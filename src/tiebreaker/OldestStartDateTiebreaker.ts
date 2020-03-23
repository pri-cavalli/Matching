import { Participant } from "../Participant";
import { Tiebreaker } from "./Tiebreaker";

export const oldestStartDateTiebreaker: Tiebreaker = (options: Participant[]) => {
    const sortedOptions = options.sort((participant1, participant2) => 
        participant1.startDate.getTime() - participant2.startDate.getTime());
    if (sortedOptions.length === 0) {
        return null;
    }
    return options[0];
}