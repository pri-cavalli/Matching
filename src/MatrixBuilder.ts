import { Participant } from "./Participant"
import { Matrix } from "./Matrix";
import { VoteClassification } from "./Vote";

const BoundaryValue = 720;

const VoteWeight = {
    [VoteClassification.Green]: 20,
    [VoteClassification.Yellow]: 0,
    [VoteClassification.Red]: -25
}
const WorkedWithWeight = -BoundaryValue;

const OpinionWeight = {
    Minor: 8,
    High: 12
}

const BonusWeight = {
    Default: 1,
    HighPriority: 1.2
}

export namespace MatrixBuilder {
    export function build(mentors: Participant[], mentees: Participant[]): Matrix {
        const matrix = new Matrix(mentors.length);

        mentors.forEach(mentor => {
            mentees.forEach(mentee => {
                const weight = calculateCellWeight(mentor, mentee);
                const positiveWeight = makeTheRangeBeInPositiveNumbers(weight);
                matrix.addCell(mentor, mentee, positiveWeight);
            });
        });
        return matrix;
    }

    function calculateCellWeight(mentor: Participant, mentee: Participant): number {
        if (alreadyWorkedTogether(mentor, mentee)) {
            return WorkedWithWeight;
        }
        const { weightOfMenteeOpinion, weightOfMentorOpinion, bonus} = calculateOptionWeightsAndBonus(mentor, mentee);
        return Math.ceil((VoteWeight[mentor.votes[mentee.name]] * weightOfMentorOpinion +
               VoteWeight[mentee.votes[mentor.name]] * weightOfMenteeOpinion) * 
               bonus);
    }

    function alreadyWorkedTogether(mentor: Participant, mentee: Participant): boolean {
        return mentee.workedWith[mentor.name] || mentor.workedWith[mentee.name];
    }

    function calculateOptionWeightsAndBonus(
        mentor: Participant, mentee: Participant
    ): {weightOfMentorOpinion: number, weightOfMenteeOpinion: number, bonus: number} {

        let weightOfMenteeOpinion = OpinionWeight.High;
        let weightOfMentorOpinion = OpinionWeight.Minor;
        let bonus = BonusWeight.Default;
        if (mentee.isOldForAMentee()) {
            bonus = BonusWeight.HighPriority;
            if (mentor.isExperiencedForAMentor()) {
                weightOfMentorOpinion = OpinionWeight.High;
                weightOfMenteeOpinion = OpinionWeight.Minor;
            }
        }
        return { weightOfMenteeOpinion, weightOfMentorOpinion, bonus};
    }

    function makeTheRangeBeInPositiveNumbers(value: number): number {
        return value + BoundaryValue;
    }
}