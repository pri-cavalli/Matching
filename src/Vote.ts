export interface Votes {
    [participant: string]: VoteClassification
}

export enum VoteClassification {
    Green = "Green",
    Yellow = "Yellow",
    Red = "Red"
}
