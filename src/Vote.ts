export interface Votes {
    [participant: string]: VoteClassification
}

export enum VoteClassification {
    Green = "Green",
    Yellow = "Yellow",
    Red = "Red"
}

export interface VotesNumber {
    [VoteClassification.Green]: number,
    [VoteClassification.Yellow]: number,
    [VoteClassification.Red]: number
}

export function getGreaterVoteClassification(
    classification1: VoteClassification,
    classification2: VoteClassification
): VoteClassification | undefined {
   if (classification1 === classification2) return;
   if (classification1 === VoteClassification.Green) return classification1;
   if (classification2 === VoteClassification.Green) return classification2;
   if (classification1 === VoteClassification.Yellow) return classification1;
   if (classification2 === VoteClassification.Yellow) return classification2;
   return;
}