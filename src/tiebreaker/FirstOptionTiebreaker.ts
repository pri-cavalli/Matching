import { Participant } from "../Participant";
import { Tiebreaker, TiebreakerReturns } from "./Tiebreaker";

export class FirstOptionTiebreaker extends Tiebreaker{
    public run(options: Participant[]): TiebreakerReturns {
        switch(options.length) {
            case 0: 
                return null;
            default:
                return options[0];
        }
    }
}