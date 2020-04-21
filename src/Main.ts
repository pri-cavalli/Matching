import { MatrixBuilder } from "./MatrixBuilder";
import { mentors, mentees } from "./Data";
import { HungarianAlgorithm } from "./HungarianAlgorithm";
import { Display } from "./MatchingDisplayer";
import _ from "lodash";
import { AllOptimalMatchingFinder } from "./AllOptimalMatchingFinder";

export function main(): void {
    const originalMatrix = MatrixBuilder.build(mentors, mentees);
    const matrix = _.cloneDeep(originalMatrix);
    const optimalMatchingFinder = new HungarianAlgorithm(matrix, mentors, mentees);
    const optimalMatching = optimalMatchingFinder.findOptimalAssignments();
    const allOptimalMatchings =
        AllOptimalMatchingFinder.find(optimalMatching, optimalMatchingFinder.getMatrix(), originalMatrix);
    Display.matchings(allOptimalMatchings, mentors, mentees);
}

main();
