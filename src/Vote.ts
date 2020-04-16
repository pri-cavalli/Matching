export interface Votes {
    [participant: string]: VoteClassification
}

export enum VoteClassification {
    Green = "Green",
    Yellow = "Yellow",
    Red = "Red"
}

export interface VotesNumber {
    Green: number,
    Yellow: number,
    Red: number
}
