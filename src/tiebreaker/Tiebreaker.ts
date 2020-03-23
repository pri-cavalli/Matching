import { Participant } from "../Participant";

export type Tiebreaker = (options: Participant[], decidingParticipant?: Participant) => TiebreakerReturns;
export type TiebreakerReturns = Participant | Participant[] | null;