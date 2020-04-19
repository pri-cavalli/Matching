import { MatrixBuilder } from "./MatrixBuilder";
import { mentors, mentees } from "./Data";
import { HungarianAlgorithm } from "./HungarianAlgorithm";
import { Display } from "./MatchingDisplayer";
import { FindAllMaxMatching } from "./FindAllMaxMatching";
import _ from "lodash";

export function main(): void {
    const originalMatrix = MatrixBuilder.build(mentors, mentees);
    const matrix = _.cloneDeep(originalMatrix);
    const matchingFinder = new HungarianAlgorithm(matrix, mentors, mentees);
    const matchings = matchingFinder.findMultipleOptimalAssignments(originalMatrix);
    matchings.forEach(m => Display.matching(m, mentors, mentees));
}

main();
