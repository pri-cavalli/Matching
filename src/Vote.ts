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