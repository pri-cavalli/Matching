import { Participant } from "./Participant"
import { Matrix } from "./Matrix";
import { VoteClassification } from "./Vote";

const VotesWeight = {
    [VoteClassification.Green]: 2,
    [VoteClassification.Yellow]: 1,
    [VoteClassification.Red]: -1
}
const WorkedWithWeight = -3;

const OpinionWeight = {
    MentorDefault: 0.9,
    MenteeDefault: 1.1,
    Minor: 0.7,
    High: 1.3
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
            return calculateWorkedTogetherWeight(mentor, mentee)
        }
        const { weightOfMenteeOpinion, weightOfMentorOpinion, bonus} = calculateOptionWeightsAndBonus(mentor, mentee);
        return VotesWeight[mentor.votes[mentee.name]] * weightOfMentorOpinion +
               VotesWeight[mentee.votes[mentor.name]] * weightOfMenteeOpinion + 
               bonus;
    }

    function alreadyWorkedTogether(mentor: Participant, mentee: Participant): boolean {
        return Boolean(mentee.workedWith[mentor.name]) || Boolean(mentor.workedWith[mentee.name]);
    }

    function calculateWorkedTogetherWeight(mentor: Participant, mentee: Participant): number {
        return WorkedWithWeight - 0.1 * mentor.workedWith[mentee.name] - 0.1 * mentor.workedWith[mentee.name];
    }

    function calculateOptionWeightsAndBonus(
        mentor: Participant, mentee: Participant
    ): {weightOfMentorOpinion: number, weightOfMenteeOpinion: number, bonus: number} {

        let weightOfMenteeOpinion = OpinionWeight.MenteeDefault;
        let weightOfMentorOpinion = OpinionWeight.MentorDefault;
        let bonus = 1;
        if (mentee.isOldForAMentee()) {
            weightOfMenteeOpinion = OpinionWeight.Minor;
            weightOfMentorOpinion = OpinionWeight.High;
            bonus = PriorityBonusWeight;
        } else if (mentee.isHisFirstMatching()) {
            weightOfMenteeOpinion = OpinionWeight.High;
            weightOfMentorOpinion = OpinionWeight.Minor;
        }
        return { weightOfMenteeOpinion, weightOfMentorOpinion, bonus};
    }
}