import { Participant } from "../Participant";

export type Tiebreaker = (options: Participant[], decidingParticipant?: Participant) => TiebreakerReturns;
export type TiebreakerReturns = Participant | Participant[] | null;

export function generalSwitchCase(options: Participant[]): TiebreakerReturns {
    switch(options.length) {
        case 0: 
            return null;
        case 1:
            return options[0];
        default:
            return options;
    }
}