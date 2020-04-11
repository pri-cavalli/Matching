import { Tiebreaker, TiebreakerReturns } from "./Tiebreaker"
import { Participant } from "../Participant";
import { VoteClassification, VotesNumber } from "../Vote";
import _ from "lodash";

export enum DesiredTiebreakerType {
    MostDesired = "MostDesired",
    MostUndesired = "MostUndesired"
}

export class DesiredTiebreaker extends Tiebreaker {
    private participantAndReceivedVotesMap: {[key: string]: VotesNumber} = {};
    constructor(allMentors: Participant[], allMentees: Participant[], private desiredTiebreakType: DesiredTiebreakerType) {
        super();
        allMentees.forEach(mentee => this.countClassificationVotesInTheParticipant(mentee, allMentors));
        allMentors.forEach(mentor => this.countClassificationVotesInTheParticipant(mentor, allMentees));        
    }

    public run(options: Participant[], decidingParticipant?: Participant | undefined): TiebreakerReturns {
        if (!decidingParticipant) {
            return options;
        }

        const sortedOptions = options.sort(this.sort);
        const mostDesiredParticipants = sortedOptions.filter(p => 
            _.isEqual(this.participantAndReceivedVotesMap[sortedOptions[0].name], this.participantAndReceivedVotesMap[p.name]));
        
        return this.decideHowReturnOptionsByItsLength(mostDesiredParticipants);        
    }

    private countClassificationVotesInTheParticipant(participant: Participant, whoVotedInParticipant: Participant[]): void {
        const votesNumber = whoVotedInParticipant.reduce((accumulator: VotesNumber, whoVoted: Participant) => {
            if (VoteClassification.Green === whoVoted.votes[participant.name]) accumulator.Green++;
            if (VoteClassification.Yellow === whoVoted.votes[participant.name]) accumulator.Yellow++;
            if (VoteClassification.Red === whoVoted.votes[participant.name]) accumulator.Red++;
            return accumulator;
        }, { Green: 0, Yellow: 0, Red: 0 });

        this.participantAndReceivedVotesMap[participant.name] = votesNumber;
    }

    private sort = (option1: Participant, option2: Participant) => {
        const map = this.participantAndReceivedVotesMap;
        if (this.desiredTiebreakType === DesiredTiebreakerType.MostDesired) {
            return map[option1.name].Green === map[option2.name].Green ? 
                map[option2.name].Yellow - map[option1.name].Yellow :
                map[option2.name].Green - map[option1.name].Green
        }
         return map[option1.name].Green === map[option2.name].Green ? 
            map[option1.name].Yellow - map[option2.name].Yellow :
            map[option1.name].Green - map[option2.name].Green
    }

}