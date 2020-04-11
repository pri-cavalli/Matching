import { Tiebreaker, TiebreakerReturns } from "./Tiebreaker"
import { Participant } from "../Participant";
import { VoteClassification, VotesNumber } from "../Vote";
import _ from "lodash";

export class MostDesiredTiebreaker extends Tiebreaker {
    private participantAndReceivedVotesMap: {[key: string]: VotesNumber} = {};
    constructor(allMentors: Participant[], allMentees: Participant[]) {
        super();
        allMentees.forEach(mentee => this.countClassificationVotesInTheParticipant(mentee, allMentors));
        allMentors.forEach(mentor => this.countClassificationVotesInTheParticipant(mentor, allMentees));        
    }

    public run(options: Participant[], decidingParticipant?: Participant | undefined): TiebreakerReturns {
        if (!decidingParticipant) {
            return options;
        }

        const sortedOptions = options.sort((a,b) => 
            this.participantAndReceivedVotesMap[a.name].Green === this.participantAndReceivedVotesMap[b.name].Green ? 
                this.participantAndReceivedVotesMap[b.name].Yellow - this.participantAndReceivedVotesMap[a.name].Yellow :
                this.participantAndReceivedVotesMap[b.name].Green - this.participantAndReceivedVotesMap[a.name].Green
        );
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

}