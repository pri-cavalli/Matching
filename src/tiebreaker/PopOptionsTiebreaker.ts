import { Participant } from "../Participant";
import { Tiebreaker } from "./Tiebreaker";

export const popOptionsTiebreaker: Tiebreaker = (options: Participant[]) => {
    switch(options.length) {
        case 0: 
            return null;
        default:
            return options[0];
    }
}