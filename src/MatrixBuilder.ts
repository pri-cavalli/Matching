import { Participant } from "./Participant"
import { Matrix } from "./Matrix";
import { VoteClassification } from "./Vote";

const VotesWeight = {
    [VoteClassification.Green]: 70,
    [VoteClassification.Yellow]: 50,
    [VoteClassification.Red]: 30
}
const WorkedWithWeight = 1;

const OpinionWeight = {
    Minor: 8,
    High: 12
}
const PriorityBonusWeight = 1.1;

export namespace MatrixBuilder {
    export function build(mentors: Participant[], mentees: Participant[]): Matrix {
        const matrix = new Matrix(mentors.length);

        mentors.forEach(mentor => {
            mentees.forEach(mentee => {
                const weight = calculateCellWeight(mentor, mentee);
                matrix.addCell(mentor, mentee, weight);
            });
        });
        return matrix;
    }

    function calculateCellWeight(mentor: Participant, mentee: Participant): number {
        if (alreadyWorkedTogether(mentor, mentee)) {
            return WorkedWithWeight;
        }
        const { weightOfMenteeOpinion, weightOfMentorOpinion, bonus} = calculateOptionWeightsAndBonus(mentor, mentee);
        return Math.ceil((VotesWeight[mentor.votes[mentee.name]] * weightOfMentorOpinion +
               VotesWeight[mentee.votes[mentor.name]] * weightOfMenteeOpinion) * 
               bonus);
    }

    function alreadyWorkedTogether(mentor: Participant, mentee: Participant): boolean {
        return Boolean(mentee.workedWith[mentor.name]) || Boolean(mentor.workedWith[mentee.name]);
    }

    function calculateOptionWeightsAndBonus(
        mentor: Participant, mentee: Participant
    ): {weightOfMentorOpinion: number, weightOfMenteeOpinion: number, bonus: number} {

        let weightOfMenteeOpinion = OpinionWeight.High;
        let weightOfMentorOpinion = OpinionWeight.Minor;
        let bonus = 1;
        if (mentee.isOldForAMentee() || mentee.isHisFirstMatching()) {
            bonus = PriorityBonusWeight;
        }
        return { weightOfMenteeOpinion, weightOfMentorOpinion, bonus};
    }
}