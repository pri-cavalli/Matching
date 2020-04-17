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
    MentorDefault: 9,
    MenteeDefault: 11,
    Minor: 7,
    High: 13
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
        return Math.floor((VotesWeight[mentor.votes[mentee.name]] * weightOfMentorOpinion +
               VotesWeight[mentee.votes[mentor.name]] * weightOfMenteeOpinion) * 
               bonus);
    }

    function alreadyWorkedTogether(mentor: Participant, mentee: Participant): boolean {
        return Boolean(mentee.workedWith[mentor.name]) || Boolean(mentor.workedWith[mentee.name]);
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
        } 
        // else if (mentee.isHisFirstMatching()) {
        //     weightOfMenteeOpinion = OpinionWeight.High;
        //     weightOfMentorOpinion = OpinionWeight.Minor;
        // }
        return { weightOfMenteeOpinion, weightOfMentorOpinion, bonus};
    }
}