import { Participant } from "../Participant";

export type TiebreakerReturns = Participant | Participant[] | null;
export abstract class Tiebreaker {    
    public abstract run(options: Participant[], decidingParticipant?: Participant): TiebreakerReturns;
    
    protected decideHowReturnOptionsByItsLength(options: Participant[]): TiebreakerReturns {
        switch(options.length) {
            case 0: 
                return null;
            case 1:
                return options[0];
            default:
                return options;
        }
    }
}
