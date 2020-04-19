import { Matching } from "./HungarianAlgorithm";
import _ from "lodash";
import { Matrix } from "./Matrix";
import { Participant } from "./Participant";

export namespace FindAllMaxMatching {
    export function find(matrix: Matrix, originalMatrix: Matrix, matching: Matching, mentors: Participant[], mentees: Participant[]): Matching[] {
        const maxValue = matching.reduce((acc, {mentor, mentee}) => {
            acc += originalMatrix.value[mentor][mentee];
            return acc;
        }, 0);
        const flexibleMentees = getFlexibleMentees(mentors, mentees, matrix);
        const flexibleMentors = getFlexibleMentors(mentors, mentees, matrix);
        if (flexibleMentees.length === 0 && flexibleMentors.length === 0) {
            console.log("Only one optimal solution.");
            return [];
        }
        debugger
        return [];
    }

    function getFlexibleMentors(mentors: Participant[], mentees: Participant[], matrix: Matrix): Participant[] {
        return mentors.filter(mentor => {
            let count = 0;
            mentees.forEach(mentee => {
                if (matrix.value[mentor.name][mentee.name] === 0)
                    count++
            });
            return count > 1;
        });
    }

    function getFlexibleMentees(mentors: Participant[], mentees: Participant[], matrix: Matrix): Participant[] {
        return mentees.filter(mentee => {
            let count = 0;
            mentors.forEach(mentor => {
                if (matrix.value[mentor.name][mentee.name] === 0)
                    count++
            });
            return count > 1;
        });
    }
}